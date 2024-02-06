import './BoatCard.scss';

const BoatCard = ({ boat }) => {
	return (
		<section className='boatCard'>
			<div>
				<img
					src=''
					alt=''
				/>
			</div>
			<h3> Name: {boat.name}</h3>
			<h3>Production Year: {boat.productionYear}</h3>
			<h3>Type: {boat.boatType}</h3>
			<h3>Available: {boat.available ? '✅' : '🅾️'}</h3>
		</section>
	);
};

export default BoatCard;
