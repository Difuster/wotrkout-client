import useAuth from '../../../hooks/useAuth';
import Hamburger from '../hamburger/Hamburger';
import styles from './Header.module.scss';
import {ImArrowLeft2} from 'react-icons/im';

const Header = () => {
  const {isAuth} = useAuth();

  return (
    <header className={styles.header}>
      <button>
        <ImArrowLeft2 style={{color: 'white'}} />
      </button>
      <Hamburger />
    </header>
  );
};

export default Header;
