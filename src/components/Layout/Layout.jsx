import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, HeaderList, StyledNavLink } from './Layout.styled';
import { Loader } from 'components/Loader';
export function Layout() {
	return (
		<>
			<Header>
				<nav>
					<HeaderList>
						<li>
							<StyledNavLink end to="/">Home</StyledNavLink>
						</li>
						<li>
							<StyledNavLink to="/movies">Movies</StyledNavLink>
						</li>
					</HeaderList>
				</nav>
			</Header>
			<Suspense fallback={<Loader/>}>
				<Outlet />
			</Suspense>
		</>
	);
}
