import { useContext, useEffect, useState } from 'react';
import './Boats.scss';
import BoatCard from '../../components/BoatCard/BoatCard';
import { DataContext } from '../../context/Context';

const AvailableBoats = () => {
	const { boats, setBoats } = useContext(DataContext);
	const availableBoats = boats.filter((boat) => boat.available === true);
	return (
		<main className='boats'>
			{availableBoats.map((boat) => (
				<BoatCard key={boat._id} boat={boat} />
			))}
		</main>
	);
};

export default AvailableBoats;
