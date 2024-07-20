import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function AppLayout() {
	return (
		<>
			<Header />

			<div className='max-container mb-10 px-3'>
				<Outlet />
			</div>

			<Footer />
		</>
	);
}
