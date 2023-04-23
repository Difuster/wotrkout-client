import { ImArrowLeft2 } from 'react-icons/im';
import { SlUser } from 'react-icons/sl';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import Hamburger from '../hamburger/Hamburger';
import styles from './Header.module.scss';

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { isAuth } = useAuth();

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink);
					}}
				>
					<ImArrowLeft2 className='header-icon' />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile');
					}}
				>
					<SlUser className='header-icon' />
				</button>
			)}
			<Hamburger />
		</header>
	);
};

export default Header;
