import Logo from './Logo';
import { NavMenu } from './NavMenu';

export default function Header() {
	return (
		<header className='bg-gray-800 py-5 mb-10'>
			<div className='max-container'>
				<div className='wrapper ps-2 pe-4'>
					<div className='flex flex-col lg:flex-row items-center justify-between'>
						<picture className='w-64'>
							<Logo />
						</picture>

						<NavMenu />
					</div>
				</div>
			</div>
		</header>
	);
}
