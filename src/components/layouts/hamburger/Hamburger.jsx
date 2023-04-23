import { RiCloseFill, RiMenu3Line } from 'react-icons/ri';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import styles from './Hamburger.module.scss';
import Menu from './Menu';

const Hamburger = () => {
	const { isShown, setIsShown, ref } = useOnClickOutside(false);

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShown(!isShown)}>
				{isShown ? (
					<RiCloseFill className="header-icon" />
				) : (
					<RiMenu3Line className="header-icon" />
				)}
			</button>
			<Menu isShown={isShown} />
		</div>
	);
};

export default Hamburger;
