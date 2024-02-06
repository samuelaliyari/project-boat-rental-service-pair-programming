import './AddNewBooking.scss';
import { useParams } from 'react-router-dom';
const AddNewBooking = () => {
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

	const addNewBooking = async () => {};

	return (
		<main className='addNewBooking'>
			<form>
				<input
					type='text'
					placeholder='Firstname'
				/>
				<input
					type='text'
					placeholder='Lastname'
				/>
				<input
					type='number'
					placeholder='Phonenumber'
				/>
				<input
					type='email'
					placeholder='e.g. john.doe@mail.com'
				/>
				<label>
					Start date:{' '}
					<input
						type='date'
						min={minStartDay}
					/>
				</label>
				<label>
					End date:{' '}
					<input
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
