import { useContext, useEffect, useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import AddNewBoat from './pages/Boats/AddNewBoat/AddNewBoat';
import Boats from './pages/Boats/Boats';
import BoatDetail from './pages/Boats/DetailPage/BoatDetail';
import AddNewBooking from './pages/Bookings/AddNewBooking/AddNewBooking';
import Bookings from './pages/Bookings/Bookings';
import BookingDetail from './pages/Bookings/DetailPage/BookingDetail';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { DataContext } from './context/Context';
import AvailableBoats from './pages/Boats/Boats';

function App() {
	const [boats, setBoats] = useState([]);
	const [bookings, setBookings] = useState([]);

	const fetchBoats = async () => {
		const allBoats = await fetch(
			import.meta.env.VITE_SERVER_LINK + '/boats',
		);
		const { success, result, error } = await allBoats.json();
		if (!success) console.log(error);
		else {
			setBoats(result);
			return result;
		}
	};

	const fetchBookings = async () => {
		const bookingsFetch = await fetch(
			import.meta.env.VITE_SERVER_LINK + '/bookings',
		);
		const { success, result, error } = await bookingsFetch.json();
		if (!success) console.log(error);
		else setBookings(result);
	};

	useEffect(() => {
		fetchBoats();
		fetchBookings();
	}, []);

	return (
		<>
			<NavBar />
			<DataContext.Provider
				value={{
					boats,
					setBoats,
					bookings,
					setBookings,
					fetchBookings,
				}}>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/boats'
						element={<Boats />}
					/>
					<Route
						path='/boat/:boatid'
						element={<BoatDetail />}
					/>
					<Route
						path='/bookings'
						element={<Bookings />}
					/>
					<Route
						path='/booking/:bookingid'
						element={<BookingDetail />}
					/>
					<Route
						path='/boats/add'
						element={<AddNewBoat />}
					/>
					<Route
						path='/boats/available'
						element={<AvailableBoats />}
					/>
					<Route
						path='/bookings/add/:boatid'
						element={<AddNewBooking />}
					/>
				</Routes>
			</DataContext.Provider>
		</>
	);
}

export default App;
