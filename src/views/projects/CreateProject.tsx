import { Link } from 'react-router-dom';

export default function CreateProject() {
	return (
		<>
			<div className='mb-5'>
				<h1 className='text-4xl lg:text-5xl font-bold mb-4'>Create a new Project</h1>
				<p className='text-base lg:text-lg font-semibold'>Fill the fields</p>
			</div>

			<nav className='block'>
				<Link
					to='/'
					className='rounded bg-purple-500 hover:bg-purple-600 px-4 py-2 text-white text-xl font-bold cursor-pointer transition-colors'>
					Go Back
				</Link>
			</nav>
		</>
	);
}
