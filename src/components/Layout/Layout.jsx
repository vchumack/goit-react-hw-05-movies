import { NavLink, Outlet } from 'react-router-dom';
export function Layout() {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/movies">Movies</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<hr/>
			<Outlet />
		</>
	);
}
