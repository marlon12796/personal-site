import Link from 'next/link';
import { routes } from '../data/global';
import Image from 'next/image';
function Navbar() {
	return (
		<nav className='flex items-center justify-between'>
			<li className='list-none font-bold text-lg cursor-pointer'>
				<Link href='/'>
					<span className='font-black text-xl flex items-center text-white'>
						<Image
							className='mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500'
							src='/static/logos/logo.svg'
							width='60'
							height={60}
							alt='logo no text'
						/>
						Marlon.dev
					</span>
				</Link>
			</li>
			<ul className='flex items-center space-x-10'>
				{routes.map((item, index) => {
					return (
						<li key={index} className={`list-none text-white `}>
							<Link href={item.path}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
// ${
// 								currentPage === item.title ? 'opacity-100' : 'opacity-40 hover:opacity-100 transition-opacity'
// 							}
