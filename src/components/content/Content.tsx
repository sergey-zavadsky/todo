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
				<h2 className={upcoming.title}>Upcoming</h2>
				<div className={blockStructure.blockSection}>
					<Block />
				</div>
			</div>
			<h2 className={popular.title}>Popular courses</h2>
			<div className={popular.wrapper}>
				<div className={popular.main}>
					<div className={blockStructure.blockSection}>
						<Block />
						<Block />
						<Block />
						<Block />
						<Block />
						<Block />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
