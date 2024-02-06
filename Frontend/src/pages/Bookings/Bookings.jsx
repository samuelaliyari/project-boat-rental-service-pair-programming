import { useContext, useEffect } from 'react';
import './Bookings.scss';
import { DataContext } from '../../context/Context';
import BookingCard from '../../components/BookingCard/BookingCard';

const Bookings = () => {
	const { bookings, setBookings, fetchBookings } = useContext(DataContext);

	useEffect(() => {
		fetchBookings();
	}, []);
	return (
		<main className='bookings'>
			{bookings.map((booking) => (
				<BookingCard key={booking._id} booking={booking} />
			))}
		</main>
	);
};

export default Bookings;
