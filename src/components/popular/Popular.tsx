import popular from './css/Popular.module.css';
import block from '../itemBlock/css/Block.module.css';
import Block from '../itemBlock/Block';
import { IconGeoAlt, IconBxTimeFive } from '../../icons/Icons';

function Popular() {
	const parent = (
		<>
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
		</>
	);

	return (
		<>
			<h2 className={popular.title}>Popular courses</h2>
			<div className={popular.wrapper}>
				<div className={popular.main}>
					<div className={block.blockSection}>
						<Block parent={parent} />
						<Block parent={parent} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Popular;
