import styles from './css/Content.module.css';
import search from '../search/Search.module.css';
import upcoming from '../upcoming/Upcoming.module.css';
import popular from '../popular/Popular.module.css';
import { IconSearch } from '../../icons/Icons';
import Block from '../itemBlock/Block';
import blockStructure from '../itemBlock/css/Block.module.css';

function Content() {
	return (
		<div className={styles.content}>
			<div className={search.main}>
				<IconSearch className={search.icon} />
				<input className={search.input} placeholder="Search" />
			</div>

			<div className={upcoming.main}>
				<h2>Upcoming</h2>
				<div className={blockStructure.blockSection}>
					<Block />
				</div>
			</div>
			<div className={popular.main}>
				<h2>Popular courses</h2>
				<div className={blockStructure.blockSection}>
					<Block />
					<Block />
					<Block />
				</div>
			</div>
		</div>
	);
}

export default Content;
