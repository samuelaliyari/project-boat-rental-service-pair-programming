import { useContext, useEffect, useState } from 'react';
import './Home.scss';
import { DataContext } from '../../context/Context';
import calenderImage from '../../../public/calenderBG.jpeg';
import availableBG from '../../../public/availableBG.jpeg';

import { Link } from 'react-router-dom';
const Home = () => {
	const { boats, setBoats, bookings, setBookings, fetchBookings } =
		useContext(DataContext);

	useEffect(() => {
		fetchBookings();
	}, []);

	return (
		<main className='home'>
			<section>
				{boats.map((boat) => (
					<Link
						key={boat._id}
						to={`/boat/${boat._id}`}>
						<img
							src={'http://localhost:3001/img/' + boat.image}
							alt=''
						/>
						<h3>{boat.name}</h3>
					</Link>
				))}
			</section>
			<article>
				<Link to='/bookings'>
					<h2>Bookings ({bookings?.length})</h2>
					<img
						src={calenderImage}
						alt=''
					/>
				</Link>
				<Link to='/boats/available'>
					<h2>
						All Boats (
						{boats.length}
						)
					</h2>
					<img
						src={availableBG}
						alt=''
					/>
				</Link>
			</article>
		</main>
	);
};

export default Home;
