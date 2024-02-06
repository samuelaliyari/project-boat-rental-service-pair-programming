import { useContext, useEffect, useState } from 'react';
import '../Boats.scss';
import BoatCard from '../../components/BoatCard/BoatCard';
import { DataContext } from '../../context/Context';

const Boats = () => {
	const { boats, setBoats } = useContext(DataContext);

	return (
		<main className='boats'>
			{boats.map((boat) => (
				<BoatCard boat={boat} />
			))}
		</main>
	);
};

export default Boats;
