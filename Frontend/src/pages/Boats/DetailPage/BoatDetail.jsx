import { useContext, useEffect, useState } from 'react';
import './BoatDetail.scss';
import { DataContext } from '../../../context/Context';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BoatDetail = () => {
	
	const {bookings, setBookings} = useContext(DataContext);
	const [ boat, setBoat ] = useState({});
	const navigate = useNavigate();

	const { boatid } = useParams() ;

	const fetchBookings = async (id) => {
		const allBookings = await fetch(
			 import.meta.env.VITE_SERVER_LINK + '/bookings/boat_bookings/' + id,
		);
		const { success, result, error } = await allBookings.json();
		if (!success) console.log(error);
		else setBookings(result);
	};

	const fetchBoat = async (id) => {
		const boat = await fetch(import.meta.env.VITE_SERVER_LINK + '/boats/' + id)
		const { success, result, error } = await boat.json();
		if (!success) console.log(error);
		else setBoat(result);
	}

	useEffect(() => {
		fetchBoat(boatid);
		fetchBookings(boatid);
	}, [])

	return (
		<main className='boatDetail'>
			<h1>Boat Detail</h1>
			<h3>Name: {boat?.name}</h3>
			<p>S/N: {boat?.serialNumber}</p>
			<p>Construction year: {boat?.productionYear}</p>
			<p>Material: {boat?.material}</p>
			<p>Boat type: {boat?.boatType}</p>
			<h4>Bookings</h4>
			{bookings?.map((booking) => (
			<article key={booking._id}>
				<Link to={`/booking/${booking._id}`}>
				{booking.bookingNumber}</Link> 
				<p>{new Date(booking.startDate).toLocaleDateString()}</p>
				<p>{new Date(booking.endDate).toLocaleDateString()}</p>
			
			</article>))}
		</main>
	);
};

export default BoatDetail;
