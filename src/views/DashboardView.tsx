import { Link } from 'react-router-dom';

export default function DashboardView() {
	return (
		<>
			<div className='mb-5'>
				<h1 className='text-4xl lg:text-5xl font-bold uppercase mb-4'>Projects</h1>
				<p className='text-base lg:text-lg font-semibold'>Manage your projects</p>
			</div>

			<nav className='block'>
				<Link
					to='/projects/create'
					className='rounded bg-purple-500 hover:bg-purple-600 px-4 py-2 text-white text-xl font-bold cursor-pointer transition-colors'>
					New Project
				</Link>
			</nav>
		</>
	);
}
