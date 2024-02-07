import { useContext, useEffect, useState } from 'react';
import './BoatDetail.scss';
import { DataContext } from '../../../context/Context';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BoatDetail = () => {
	const { boats, setBoats, bookings, setBookings, fetchBoats } =
		useContext(DataContext);
	const [boat, setBoat] = useState({});
	const [boatBookings, setBoatBookings] = useState([]);
	const navigate = useNavigate();

	const { boatid } = useParams();

	const fetchBookings = async (id) => {
		const allBookings = await fetch(
			import.meta.env.VITE_SERVER_LINK + '/bookings/boat_bookings/' + id,
		);
		const { success, result, error } = await allBookings.json();
		if (!success) console.log(error);
		else setBoatBookings(result);
	};

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
		fetchBoat(boatid);
	}, []);

	const deleteBoat = async () => {
		const fetchData = await fetch(
			import.meta.env.VITE_SERVER_LINK + '/boats/delete/' + boat._id,
			{
				method: 'DELETE',
			},
		);
		const { success, result, error } = await fetchData.json();
		if (!success) console.log(error);
		else console.log(result);
		fetchBoats();
		navigate('/boats');
	};

	return (
		<main className='boatDetail'>
			<div className='image_wrapper'>
				<img
					src={'http://localhost:3001/img/' + boat.image}
					alt=''
				/>
			</div>
			<section>
				<h3>{boat?.name}</h3>
				<section>
					<article>
						<p>S/N: {boat?.serialNumber}</p>
						<p>Construction year: {boat?.productionYear}</p>
					</article>
					<article>
						<p>Material: {boat?.material}</p>
						<p>Boat type: {boat?.boatType}</p>
					</article>
					<button onClick={() => deleteBoat()}>Delete Boat</button>
				</section>
				<h4>Bookings</h4>
				<div>
					<article>
						<h4>B/N</h4>
						<h4>Start Date</h4>
						<h4>End Date</h4>
					</article>
					{boatBookings?.map((booking) => (
						<article key={booking._id}>
							<Link to={`/booking/${booking._id}`}>
								{booking.bookingNumber}
							</Link>
							<p>
								{new Date(
									booking.startDate,
								).toLocaleDateString()}
							</p>
							<p>
								{new Date(booking.endDate).toLocaleDateString()}
							</p>
						</article>
					))}
				</div>
				<Link
					className='addBooking'
					to={`/bookings/add/${boat._id}`}>
					Add Booking
				</Link>
			</section>
		</main>
	);
};

export default BoatDetail;
