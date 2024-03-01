import Link from 'next/link';
import { RandomTitle } from './components/RandomTitle';
import Image from 'next/image';
import Next404 from '../../public/404.webp';
const Page404 = () => {
	return (
		<div className='w-full grow min-h-[80dvh] flex items-center justify-center flex-col animate-fadeIn relative'>
			<div className='absolute w-8/12 inset-[auto_0_0_auto] aspect-square'>
				<Image
					src={Next404}
					fill
					alt='not-found page'
					sizes='100vw'
					fetchPriority='high'
					className='-z-10 object-cover opacity-75'
				/>
			</div>

			<RandomTitle />
			<p className='text-fun-gray text-xl mt-8 flex items-center'>
				Sorry, looks like that page is missing!&nbsp;&nbsp;
			</p>
			<Link
				href={'/'}
				className='bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group '
			>
				<span className='bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
				Hover Me
			</Link>
		</div>
	);
};

export default Page404;
