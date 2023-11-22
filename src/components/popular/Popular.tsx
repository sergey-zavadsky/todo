import popular from './css/Popular.module.css';
import block from '../itemBlock/css/Block.module.css';
import Block from '../itemBlock/Block';
import { IconGeoAlt, IconBxTimeFive } from '../../icons/Icons';

function Popular() {
	const parent = (
		<>
			<div className={popular.dateBlock}>
				<div className={popular.month}>Dec</div>
				<div className={popular.date}>15</div>
			</div>
			<div className={popular.delimiter}> </div>
			<div className={popular.location}>
				<div className={popular.locationTitle}>Make a babka dough</div>
				<div className={popular.locationAdditionalData}>
					<div className={popular.firstRaw}>
						<IconGeoAlt />
						<div>Lida, Belarus</div>
					</div>
					<div className={popular.secondRaw}>
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
