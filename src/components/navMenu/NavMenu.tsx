import { IconHomeCircleOutline, IconProfile } from '../../icons/Icons';
import navigationMenu from './css/NavigationMenu.module.css';

function NavMenu() {
	const iconSize = '32px';
	return (
		<div className={navigationMenu.main}>
			<div className={navigationMenu.buttons}>
				<div className={navigationMenu.iconBlock}>
					<IconHomeCircleOutline height={iconSize} width={iconSize} />
					Home
				</div>
				<div className={navigationMenu.iconBlock}>
					<IconProfile height={iconSize} width={iconSize} />
					Profile
				</div>
			</div>
		</div>
	);
}

export default NavMenu;
