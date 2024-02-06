import { Link } from 'react-router-dom';
import './BoatCard.scss';

const BoatCard = ({ boat }) => {
	return (
		<section className='boatCard'>
			<Link to={`/boat/${boat._id}`}>
				<div>
					<img
						src={'http://localhost:3001/img/' + boat.image}
						alt=''
					/>
				</div>
				<article>
					<h3> Name: </h3>
					<h3>{boat.name}</h3>
				</article>
				<article>
					<h3>Type: </h3>
					<h3>{boat.boatType}</h3>
				</article>
				<article>
					<h3>Available: </h3>
					<h3>{boat.available ? '✅' : '🅾️'}</h3>
				</article>
				<article>
					<h3>Production Year: </h3>
					<h3>{boat.productionYear}</h3>
				</article>
				<Link to={`/boat/${boat._id}`}>Bookings</Link>
			</Link>
		</section>
	);
};

export default BoatCard;
