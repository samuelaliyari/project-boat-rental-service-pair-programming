import { useContext, useEffect, useState } from 'react';
import './EditBooking.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../../../context/Context';

const EditBooking = () => {
	const { fetchBookings } = useContext(DataContext);
	const [editedBooking, setEditedBooking] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		startDate: '',
		endDate: '',
	});
	const { bookingid } = useParams();
	const today = new Date().toISOString().slice(0, 10);
	const minStartDay = today.replace(
		today.charAt(9),
		Number(today.charAt(9)) + 1,
	);
	const minEndDay = today.replace(
		today.charAt(9),
		Number(today.charAt(9)) + 2,
	);

	const navigate = useNavigate();
	const editBooking = async () => {
		const formData = new FormData();
		formData.append('firstName', editedBooking.firstName);
		formData.append('lastName', editedBooking.lastName);
		formData.append('phone', editedBooking.phone);
		formData.append('email', editedBooking.email);
		formData.append('startDate', editedBooking.startDate);
		formData.append('endDate', editedBooking.endDate);
		formData.append('boatId', editedBooking.boatId);
		formData.append('_id', editedBooking._id);

		const fetchEditedBooking = await fetch(
			import.meta.env.VITE_SERVER_LINK + '/bookings/edit',
			{
				method: 'PUT',
				body: formData,
			},
		);
		const { success, result, error } = await fetchEditedBooking.json();
		if (!success) console.log(error);
		else;
		fetchBookings();
		navigate('/bookings');
	};

	const fetchBooking = async (id) => {
		const fetchedBooking = await fetch(
			import.meta.env.VITE_SERVER_LINK + '/bookings/' + id,
		);
		const { success, result, error } = await fetchedBooking.json();
		if (!success) console.log(error);
		else {
			setEditedBooking(result);
		}
	};

	useEffect(() => {
		fetchBooking(bookingid);
	}, [bookingid]);

	return (
		<main className='addNewBooking'>
			<form>
				<input
					defaultValue={editedBooking?.firstName}
					onChange={(e) =>
						setEditedBooking({
							...editedBooking,
							firstName: e.target.value,
						})
					}
					type='text'
					placeholder='Firstname'
				/>
				xs
				<input
					defaultValue={editedBooking?.lastName}
					onChange={(e) =>
						setEditedBooking({
							...editedBooking,
							lastName: e.target.value,
						})
					}
					type='text'
					placeholder='Lastname'
				/>
				<input
					defaultValue={editedBooking?.phone}
					onChange={(e) =>
						setEditedBooking({
							...editedBooking,
							phone: e.target.value,
						})
					}
					type='number'
					placeholder='Phonenumber'
				/>
				<input
					defaultValue={editedBooking?.email}
					onChange={(e) =>
						setEditedBooking({
							...editedBooking,
							email: e.target.value,
						})
					}
					type='email'
					placeholder='e.g. john.doe@mail.com'
				/>
				<label>
					Start date:{' '}
					<input
						defaultValue={editedBooking.startDate?.slice(0, 10)}
						onChange={(e) =>
							setEditedBooking({
								...editedBooking,
								startDate: e.target.value,
							})
						}
						type='date'
						min={minStartDay}
					/>
				</label>
				<label>
					End date:{' '}
					<input
						defaultValue={editedBooking.endDate?.slice(0, 10)}
						onChange={(e) =>
							setEditedBooking({
								...editedBooking,
								endDate: e.target.value,
							})
						}
						type='date'
						min={minEndDay}
					/>
				</label>
			</form>
			<button onClick={() => editBooking()}>Update</button>
		</main>
	);
};

export default EditBooking;
