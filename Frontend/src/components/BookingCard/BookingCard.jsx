import { useContext, useEffect, useState } from 'react';
import './BookingCard.scss';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Context';

const BookingCard = ({ booking }) => {
	const { fetchBookings } = useContext(DataContext);

	const [boat, setBoat] = useState({});

	const fetchBoat = async (id) => {
		const boat = await fetch(
			import.meta.env.VITE_SERVER_LINK + '/boats/' + id,
		);
		const { success, result, error } = await boat.json();
		if (!success) console.log(error);
		else {
			setBoat(result);
			fetchBookings(result._id);
		}
	};

	useEffect(() => {
		fetchBoat(booking.boatId);
	}, []);

	return (
		<section className='bookingCard'>
			<Link to={`/booking/${booking._id}`}>
				<article>
					<h3>
						{booking.firstName} {booking.lastName}
					</h3>
				</article>
				<article>
					<h3>Start Date: </h3>
					<h3>{booking.startDate.slice(0, 10)}</h3>
				</article>
				<article>
					<h3>End Date: </h3>
					<h3> {booking.endDate.slice(0, 10)}</h3>
				</article>
				<article>
					<h3>Email: </h3>
					<h3>{booking.email}</h3>
				</article>
				<article>
					<h3>Phone: </h3>
					<h3>0{booking.phone}</h3>
				</article>
				<div>
					<img
						src={'http://localhost:3001/img/' + boat?.image}
						alt=''
					/>
				</div>
			</Link>
		</section>
	);
};

export default BookingCard;
