import { useContext, useEffect, useState } from 'react';
import './Boats.scss';
import BoatCard from '../../components/BoatCard/BoatCard';
import { DataContext } from '../../context/Context';
import { Link } from 'react-router-dom';

const AvailableBoats = () => {

	const { boats, setBoats, fetchBoats, fetchBookings, bookings } = useContext(DataContext);

	const [ startDate, setStartDate ] = useState('');
	const [ endDate, setEndDate ] = useState('');
	const [ availableBoatIds, setAvailableBoatIds ] = useState([]); 
	const [ availableBoats, setAvailableBoats ] = useState([]);

	// bookings filtern, die zu dem zeitfenster passen
	// boatId aus den bookings nehmen
	// startDate und endDate < startDate || startDate > endDate
	// --> boatId in availableBoatIds hinzugefügt
	// --> mit availableBoatIds availableBoats filtern

	const findUnavailableBoats = (startDate, endDate) => {
		const matchedBookings = bookings.filter((booking) => {
			if((new Date(booking.startDate).getTime() <= new Date(startDate).getTime() 
			&& new Date(booking.endDate).getTime() >= new Date(startDate).getTime()) 
			|| (new Date(booking.startDate).getTime() <= new Date(endDate).getTime() 
			&& new Date(booking.endDate).getTime() >= new Date(endDate).getTime()))
			{
				return true;
			}else{
				return false;
			}
		});
		console.log(matchedBookings);
	}

	useEffect(() => {
		fetchBoats();
	},[]);

	useEffect(() => {
		setAvailableBoats(boats);
	},[boats]);

	useEffect(() => {
		findUnavailableBoats(startDate, endDate)
	}, [endDate])

	const today = new Date().toISOString().slice(0, 10);
	const minStartDay = today.replace(
		today.charAt(9),
		Number(today.charAt(9)) + 1,
	);
	const minEndDay = today.replace(
		today.charAt(9),
		Number(today.charAt(9)) + 2,
	);

	return (
		<main className='boatsWrapper'>
			<article>
				<label>
					Start date:{' '}
					<input
						onChange={(e) => setStartDate(e.target.value)}
						type='date'
						min={minStartDay}
					/>
				</label>
				<label>
					End date:{' '}
					<input
						onChange={(e) => setEndDate(e.target.value)}
						type='date'
						min={minEndDay}
					/>
				</label>
			</article>
			<section className='boats'>
				{availableBoats.map((boat) => (
					<BoatCard
						key={boat._id}
						boat={boat}
					/>
				))}
			</section>
			<Link
				className='addBoat'
				to='/boats/add'>
				Add Boat
			</Link>
		</main>
	);
};

export default AvailableBoats;
