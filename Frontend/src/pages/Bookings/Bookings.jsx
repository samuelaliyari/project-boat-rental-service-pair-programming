import { useContext, useEffect, useState } from 'react';
import './Bookings.scss';
import { DataContext } from '../../context/Context';
import BookingCard from '../../components/BookingCard/BookingCard';

const Bookings = () => {
	const { bookings, setBookings, fetchBookings } = useContext(DataContext);

	// select input -> monat auswählen 
	
	const [ startDate, setStartDate ] = useState('');
	const [ endDate, setEndDate ] = useState('');
	const [ monthNumber, setMonthNumber ] = useState();
	const [availableBoats, setAvailableBoats] = useState([]);

	// const currentYear = new Date().getFullYear(); 

	// const findUnavailableBoats = (startDate, endDate) => {
	// 	const matchedBookings = bookings.filter((booking) => {
	// 		if (
	// 			(new Date(booking.startDate).getTime() <=
	// 				new Date(startDate).getTime() &&
	// 				new Date(booking.endDate).getTime() >=
	// 					new Date(startDate).getTime()) &&
	// 			(new Date(booking.startDate).getTime() <=
	// 				new Date(endDate).getTime() &&
	// 				new Date(booking.endDate).getTime() >=
	// 					new Date(endDate).getTime())
	// 		) {
	// 			return true;
	// 		} else {
	// 			return false;
	// 		}
	// 	});
	// 	console.log(matchedBookings);
	// };

	// const getDate = () => {
	// 	const monthLength = new Date(Number(currentYear), monthNumber , 0).getDate();
	// 	setStartDate(new Date(Number(currentYear) + `-${monthNumber}-01`));
	// 	setEndDate(new Date(Number(currentYear) + `-${monthNumber}-${monthLength}`));
	// };

	// useEffect(() => {
	// 	getDate();
	// 	console.log("START", startDate);
	// 	console.log("END", endDate);
	// }, [monthNumber]);

	// useEffect(() => {
	// 	findUnavailableBoats(startDate, endDate);
	// }, [endDate])

	// useEffect(() => {
	// 	fetchBookings();
	// }, []);

	return (
		<main className='bookings'>
			{/* <select defaultValue='0' onChange={(e) => setMonthNumber(e.target.value)}>
				<option disabled value="0">Select Month</option>
				<option value={1}>January</option>
				<option value={2}>February</option>
				<option value={3}>March</option>
				<option value={4}>April</option>
				<option value={5}>May</option>
				<option value={6}>June</option>
				<option value={7}>July</option>
				<option value={8}>August</option>
				<option value={9}>September</option>
				<option value={10}>October</option>
				<option value={11}>November</option>
				<option value={12}>December</option>
			</select> */}
			{bookings.map((booking) => (
				<BookingCard key={booking._id} booking={booking} />
			))}
		</main>
	);
};

export default Bookings;
