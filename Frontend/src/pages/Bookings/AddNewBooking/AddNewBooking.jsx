import { useState } from 'react';
import './AddNewBooking.scss';
import { useParams } from 'react-router-dom';
const AddNewBooking = () => {

	const [newBooking, setNewBooking] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		startDate: '',
		endDate:'',
	});

	const today = new Date().toISOString().slice(0, 10);
	const minStartDay = today.replace(
		today.charAt(9),
		Number(today.charAt(9)) + 1,
	);
	const minEndDay = today.replace(
		today.charAt(9),
		Number(today.charAt(9)) + 2,
	);

	const { boatid } = useParams();

	const addNewBooking = async () => {
		const formData = new FormData();
		formData.append('firstName', newBooking.firstName);
		formData.append('lastName', newBooking.lastName);
		formData.append('phone', newBooking.phone);
		formData.append('email', newBooking.email);
		formData.append('startDate', newBooking.startDate);
		formData.append('endDate', newBooking.endDate);
		formData.append('boatId', boatid);
		const fetchNewBooking = await fetch(import.meta.env.VITE_SERVER_LINK + '/bookings/add', {
			method: 'POST',
			body: formData
		});
		const { success, result, error } = await fetchNewBooking.json();
		if(!success) console.log(error);
		else console.log(result);
	};

	return (
		<main className='addNewBooking'>
			<form>
				<input
					onChange={(e) => setNewBooking({...newBooking, firstName: e.target.value})}
					type='text'
					placeholder='Firstname'
				/>
				<input
					onChange={(e) => setNewBooking({...newBooking, lastName: e.target.value})}
					type='text'
					placeholder='Lastname'
				/>
				<input
					onChange={(e) => setNewBooking({...newBooking, phone: e.target.value})}
					type='number'
					placeholder='Phonenumber'
				/>
				<input
					onChange={(e) => setNewBooking({...newBooking, email: e.target.value})}
					type='email'
					placeholder='e.g. john.doe@mail.com'
				/>
				<label>
					Start date:{' '}
					<input
						onChange={(e) => setNewBooking({...newBooking, startDate: e.target.value})}
						type='date'
						min={minStartDay}
					/>
				</label>
				<label>
					End date:{' '}
					<input
						onChange={(e) => setNewBooking({...newBooking, endDate: e.target.value})}
						type='date'
						min={minEndDay}
					/>
				</label>
			</form>
			<button onClick={() => addNewBooking()}>Add</button>
		</main>
	);
};

export default AddNewBooking;
