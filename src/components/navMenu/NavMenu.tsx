import navigationMenu from './css/NavigationMenu.module.css';

function NavMenu() {
	return (
		<div className={navigationMenu.main}>
			<div className={navigationMenu.buttons}>
				<div>Bake</div>
				<div>Courses</div>
				<div>Profile</div>
			</div>
		</div>
	);
}

export default NavMenu;
