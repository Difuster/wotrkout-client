import { useState } from 'react';
import styles from './Hamburger.module.scss';
import {RiMenu3Line, RiCloseFill} from 'react-icons/ri';
import Menu from './Menu';

const Hamburger = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? <RiCloseFill className={styles.icon} /> : <RiMenu3Line className={styles.icon} />}
      </button>
      <Menu isShown={isShown} />
    </div>
  )
}

export default Hamburger;
