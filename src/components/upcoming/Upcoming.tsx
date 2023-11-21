import upcoming from '../upcoming/Upcoming.module.css';
import block from '../itemBlock/css/Block.module.css';
import { IconGeoAlt, IconBxTimeFive } from '../../icons/Icons';
import Block from '../itemBlock/Block';

function Upcoming() {
	const content = (
		<div className={block.blockSection}>
			<div className={block.dateBlock}>
				<div className={block.month}>Dec</div>
				<div className={block.date}>15</div>
			</div>
			<div className={block.delimiter}> </div>
			<div className={block.location}>
				<div className={block.locationTitle}>Make a babka dough</div>
				<div className={block.locationAdditionalData}>
					<div className={block.firstRaw}>
						<IconGeoAlt />
						<div>Lida, Belarus</div>
					</div>
					<div className={block.secondRaw}>
						<IconBxTimeFive />
						<div>23:00</div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className={upcoming.main}>
			<h2>Upcoming</h2>
			<Block content={content}></Block>
		</div>
	);
}

export default Upcoming;
