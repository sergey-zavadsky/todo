// import { useRecoilState } from 'recoil';
// import { isCountState } from './recoil/store/index';
import Header from './components/header/Header';
import Content from './components/content/Content';
import NavMenu from './components/navMenu/NavMenu';
import styles from './css/App.module.css';

function App() {
	// const [count, setCount] = useRecoilState(isCountState);

	return (
		<div className={styles.content}>
			<Header />
			<Content />
			<NavMenu />
		</div>
	);
}

export default App;
