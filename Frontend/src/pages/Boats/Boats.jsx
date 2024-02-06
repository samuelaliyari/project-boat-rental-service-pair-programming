import { useContext, useEffect, useState } from 'react';
import './Boats.scss';
import BoatCard from '../../components/BoatCard/BoatCard';
import { DataContext } from '../../context/Context';
import { Link } from 'react-router-dom';

const AvailableBoats = () => {
	const { boats, setBoats } = useContext(DataContext);
	const availableBoats = boats.filter((boat) => boat.available === true);
	return (
		<main className='boatsWrapper'>
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
