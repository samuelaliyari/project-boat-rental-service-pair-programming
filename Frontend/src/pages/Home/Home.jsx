import { useContext, useState } from 'react';
import './Home.scss';
import { DataContext } from '../../context/Context';
import defaultBoat from '../../../public/defaultBoat.png';
import { Link } from 'react-router-dom';
const Home = () => {
	const { boats, setBoats, bookings, setBookings } = useContext(DataContext);

	return (
		<main className='home'>
			<h2>Boats</h2>
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
					<img
						src=''
						alt=''
					/>
					<h2>Bookings ({bookings?.length})</h2>
				</Link>
				<Link to='/boats/available'>
					<img
						src=''
						alt=''
					/>
					<h2>
						Available Boats (
						{boats.filter((boat) => boat.available === true).length}
						)
					</h2>
				</Link>
			</article>
		</main>
	);
};

export default Home;
