// import { useRecoilState } from 'recoil';
// import { isCountState } from './recoil/store/index';
import Header from './components/header/Header';
import Body from './components/body/Body';
import NavMenu from './components/navMenu/NavMenu';
import styles from './css/App.module.css';

function App() {
	// const [count, setCount] = useRecoilState(isCountState);

	return (
		<div className={styles.mainApp}>
			<Header />
			<Body />
			<NavMenu />
		</div>
	);
}

export default App;
