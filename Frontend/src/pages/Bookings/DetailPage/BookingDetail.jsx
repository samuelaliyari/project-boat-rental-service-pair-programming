import { useEffect, useState } from 'react';
import './BookingDetail.scss';
import { useParams } from 'react-router-dom';

const BookingDetail = () => {

	const [ booking, setBooking ] = useState({});
	const [ boat, setBoat ] = useState({});

	const { bookingid } = useParams();

	const fetchBookings = async (id) => {
		const allBookings = await fetch(
			import.meta.env.VITE_SERVER_LINK + '/bookings/' + id,
		);
		const { success, result, error } = await allBookings.json();
		if (!success) console.log(error);
		else {
			setBooking(result)
			fetchBoat(result.boatId)
		};
	};

	const fetchBoat = async (id) => {
		const boat = await fetch(import.meta.env.VITE_SERVER_LINK + '/boats/' + id)
		const { success, result, error } = await boat.json();
		if (!success) console.log(error);
		else {
			setBoat(result)

		};
	};

	useEffect(() => {
		fetchBookings(bookingid);
	}, [])

	return (
		<main className='bookingDetail'>
			<h1>Booking Detail</h1>
			<h3>{booking?.email}</h3>
			<h3>{boat?.name}</h3>
		</main>
	);
};

export default BookingDetail;
