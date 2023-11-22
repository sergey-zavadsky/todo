import { IconSearch } from '../../icons/Icons';
import search from './css/Search.module.css';

function Search() {
	return (
		<>
			<div className={search.main}>
				<IconSearch className={search.icon} />
				<input className={search.input} placeholder="Search" />
			</div>
		</>
	);
}

export default Search;
