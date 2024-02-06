import { useContext, useEffect } from 'react';
import './Bookings.scss';
import { DataContext } from '../../context/Context';

const Bookings = () => {
	const { bookings, setBookings, fetchBookings } = useContext(DataContext);

	useEffect(() => {
		fetchBookings();
	}, []);
	return (
		<main className='bookings'>
			<h1>Bookings</h1>
			{bookings.map((booking) => (
				<h3 key={booking._id}>{booking.email}</h3>
			))}
		</main>
	);
};

export default Bookings;
