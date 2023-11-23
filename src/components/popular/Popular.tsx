import popular from './css/Popular.module.css';
import block from '../itemBlock/css/Block.module.css';
import Block from '../itemBlock/Block';
import { IconCalendar3, IconBxTimeFive } from '../../icons/Icons';

function Popular() {
	const parent = (
		<>
			<div className={popular.dateBlock}>
				<img
					src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQwu9l5QEVRGPd9-hQ90jhpiGAMg1ycT46XWkXivXoCYaZ2RUm0Fz_Y0ZVxsJ50o3_K"
					alt="..."
				/>
			</div>
			<div className={popular.location}>
				<div className={popular.locationTitle}>Make a babka dough</div>
				<div className={popular.locationAdditionalData}>
					<div className={popular.firstRaw}>Advanced</div>
					<div className={popular.secondRaw}>
						<IconBxTimeFive />
						<div>2h</div>
					</div>
					<div className={popular.thirdRaw}>
						<IconCalendar3 />
						<div>15 Dec - 23:00</div>
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
						<Block parent={parent} />
						<Block parent={parent} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Popular;
