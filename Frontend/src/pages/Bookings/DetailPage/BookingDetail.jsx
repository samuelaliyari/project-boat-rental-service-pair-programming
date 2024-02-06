import { useEffect, useState } from 'react';
import './BookingDetail.scss';
import { Link, useParams } from 'react-router-dom';

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
			<div className='image_wrapper'>
				<img
					src={'http://localhost:3001/img/' + boat?.image}
					alt=''
				/>
			</div>
			<section>
				<div>
					<article>
						<h4>B/N: </h4>
						<h4>{booking?.bookingNumber}</h4>
					</article>
					<article>
						<h4>First Name: </h4>
						<h4>{booking?.firstName}</h4>
					</article>
					<article>
						<h4>Last Name:  </h4>
						<h4>{booking?.lastName}</h4>
					</article>
					<article>
						<h4>Start Date: </h4> 
						<h4>{booking.startDate?.slice(0, 10)}</h4>
					</article>
					<article>
						<h4>End Date: </h4>
						<h4>{booking.endDate?.slice(0, 10)}</h4>
					</article>
					<article>
						<h4>Email:  </h4>
						<h4>{booking?.email}</h4>
					</article>
					<article>
						<h4>Phone Number:  </h4>
						<h4>0{booking?.phone}</h4>
					</article>
				</div>
				<Link to={`/boat/${boat._id}`}>
					<h4>{boat?.name}</h4>
				</Link>
				<section>
					<article>
						<p>S/N: {boat?.serialNumber}</p>
						<p>Construction year: {boat?.productionYear}</p>
					</article>
					<article>
						<p>Material: {boat?.material}</p>
						<p>Boat type: {boat?.boatType}</p>
					</article>
				</section>
			</section>
			
		</main>
	);
};

export default BookingDetail;
