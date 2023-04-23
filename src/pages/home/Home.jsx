import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Layout from '../../components/layouts/Layout';
import Button from '../../components/ui/button/Button';
import styles from './Home.module.scss';

function Home() {
	const { isAuth } = useAuth();

	const navigate = useNavigate();
	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button clickHandler={() => navigate(!isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/* TODO: Counters */}
		</Layout>
	);
}

export default Home;
