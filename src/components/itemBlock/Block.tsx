import block from './css/Block.module.css';
import { IconGeoAlt, IconBxTimeFive } from '../../icons/Icons';

function Block() {
	return (
		<div className={block.main}>
			<div className={block.content}>
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
		</div>
	);
}

export default Block;
