import styles from './css/Content.module.css';
import Upcoming from '../upcoming/Upcoming';
import Search from '../search/Search';
import Popular from '../popular/Popular';

function Content() {
	return (
		<div className={styles.content}>
			<Search />
			<Upcoming />
			<Popular />
		</div>
	);
}

export default Content;
