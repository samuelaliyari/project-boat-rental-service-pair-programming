import { useContext, useEffect, useState } from 'react';
import './AddNewBoat.scss';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../../context/Context';

const AddNewBoat = () => {
	const [newBoat, setNewBoat] = useState({
		name: '',
		image: '',
		productionYear: 1900,
		serialNumber: '',
		material: '',
		boatType: '',
		available: true,
	});
	const { fetchBoats } = useContext(DataContext);
	const navigate = useNavigate();

	const addNewBoat = async () => {
		const formData = new FormData();
		formData.append('boatImage', newBoat.image, newBoat.image.name);
		formData.append('name', newBoat.name);
		formData.append('productionYear', newBoat.productionYear);
		formData.append('serialNumber', newBoat.serialNumber);
		formData.append('material', newBoat.material);
		formData.append('boatType', newBoat.boatType);
		const fetchData = await fetch(
			import.meta.env.VITE_SERVER_LINK + '/boats/add',
			{
				method: 'POST',
				body: formData,
			},
		);
		const { success, result, error } = await fetchData.json();
		if (!success) console.log(error);
		else console.log(result);
		fetchBoats();
		navigate('/boats');
	};

	return (
		<main className='addNewBoat'>
			<form>
				<input
					type='text'
					placeholder='Boats name'
					onChange={(e) =>
						setNewBoat({ ...newBoat, name: e.target.value })
					}
				/>
				<input
					type='number'
					placeholder='Production year'
					onChange={(e) =>
						setNewBoat({
							...newBoat,
							productionYear: e.target.value,
						})
					}
				/>
				<input
					type='text'
					placeholder='Serial number'
					onChange={(e) =>
						setNewBoat({ ...newBoat, serialNumber: e.target.value })
					}
				/>
				<select
					defaultValue={'Select boats type'}
					name=''
					onChange={(e) =>
						setNewBoat({ ...newBoat, boatType: e.target.value })
					}
					id=''>
					<option disabled>Select boats type</option>
					<option value='Pedal boat'>Pedal boat</option>
					<option value='Yacht'>Yacht</option>
					<option value='Motor Boat'>Motor Boat</option>
					<option value='Sail boat'>Sail boat</option>
					<option value='Hovercraft'>Hovercraft</option>
					<option value='Ghostship'>Ghostship</option>
					<option value='Container ship'>Container ship</option>
				</select>
				<select
					defaultValue={'Select boats material'}
					onChange={(e) =>
						setNewBoat({ ...newBoat, material: e.target.value })
					}
					name=''
					id=''>
					<option
						selected
						disabled>
						Select boats material
					</option>
					<option value='GFK'>GFK</option>
					<option value='Wood'>Wood</option>
					<option value='Metal'>Metal</option>
					<option value='Cardboard'>Cardboard</option>
					<option value='Soul'>Soul</option>
				</select>
				<input
					onChange={(e) =>
						setNewBoat({ ...newBoat, image: e.target.files[0] })
					}
					type='file'
					name='boatImage'
					id=''
				/>
			</form>
			<button onClick={() => addNewBoat()}>Add</button>
		</main>
	);
};

export default AddNewBoat;
