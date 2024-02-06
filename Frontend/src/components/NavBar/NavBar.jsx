import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import home from '../../../public/home.png';
import calender from '../../../public/calender.png';
import yacht from '../../../public/yacht.png';
const NavBar = () => {
	return (
		<header>
			<nav>
				<NavLink to='/'>
					<img
						src={home}
						alt=''
					/>
				</NavLink>
				<NavLink to='/boats'>
					<img
						src={yacht}
						alt=''
					/>
				</NavLink>
				<NavLink to='/bookings'>
					<img
						src={calender}
						alt=''
					/>
				</NavLink>
			</nav>
		</header>
	);
};

export default NavBar;
