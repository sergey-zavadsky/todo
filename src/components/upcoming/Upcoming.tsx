import upcoming from './css/Upcoming.module.css';
import block from '../itemBlock/css/Block.module.css';
import Block from '../itemBlock/Block';
import { IconGeoAlt, IconBxTimeFive } from '../../icons/Icons';

function Upcoming() {
	const parent = (
		<>
			<div className={upcoming.dateBlock}>
				<div className={upcoming.month}>Dec</div>
				<div className={upcoming.date}>15</div>
			</div>
			<div className={upcoming.delimiter}> </div>
			<div className={upcoming.location}>
				<div className={upcoming.locationTitle}>Make a babka dough</div>
				<div className={upcoming.locationAdditionalData}>
					<div className={upcoming.firstRaw}>
						<IconGeoAlt />
						<div>Lida, Belarus</div>
					</div>
					<div className={upcoming.secondRaw}>
						<IconBxTimeFive />
						<div>23:00</div>
					</div>
				</div>
			</div>
		</>
	);

	return (
		<>
			<h2 className={upcoming.title}>Upcoming</h2>
			<div className={upcoming.wrapper}>
				<div className={upcoming.main}>
					<div className={block.blockSection}>
						<Block parent={parent} />
						<Block parent={parent} />
						<Block parent={parent} />
						<Block parent={parent} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Upcoming;
