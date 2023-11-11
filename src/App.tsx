import { useRecoilState } from 'recoil';
import { isCountState } from './recoil/store/index';
import './App.css';

function App() {
	const [count, setCount] = useRecoilState(isCountState);

	return (
		<>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	);
}

export default App;
