'use client';
import Image from 'next/image';
import Link from 'next/link';
function Hero() {
	return (
		<>
			<div
				className='relative animate-scale-down-in w-full  [padding-block:5em] flex justify-center text-center flex-col items-center z-1  overflow-hidden'
				style={{ maxWidth: '1200px' }}
			>
				<p className='text-xl mb-5 text-white'>Hey, I&apos;m Marlon.</p>
				<h1 className='heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg text-white'>
					I enjoy <span className='heroShiny1 text-blue-500'>building</span> and{' '}
					<span className='heroShiny2 text-blue-500'>designing</span> for the web.
					<Image
						className='sqD squiggle-hero-html w-auto h-auto top-[-90px] right-[3%] sm:top-[-90px] sm:right-[170px]'
						style={{ animationDelay: '0.1s' }}
						src='/static/doodles/hero/html.svg'
						alt='HTML Logo'
						width={100}
						height={100}
					/>
					<Image
						className='sqD squiggle-hero-nextjs  top-[75px] right-0 w-11'
						style={{ animationDelay: '0.2s' }}
						src='/static/doodles/hero/nextjs.svg'
						alt='Nextjs Logo'
						width={100}
						height={100}
					/>
					<Image
						className='sqD w-13 aspect-square  top-14 sm:top-6  sm:-left-[10%] sm:block'
						style={{ animationDelay: '0.4s' }}
						src='/static/doodles/hero/coder.svg'
						alt='coder'
						width={100}
						height={100}
					/>
					<Image
						className='sqD hidden w-13 aspect-square sm:block left-[100px] lg:left-[160px] bottom-[-150px]'
						style={{ animationDelay: '0.5s' }}
						src='/static/doodles/hero/js.svg'
						alt='hero logo'
						width={100}
						height={100}
					/>
					<Image
						className='sqD w-13 aspect-square bottom-[-180px] right-[65%] sm:bottom-[-200px] sm:right-[45%]'
						style={{ animationDelay: '0.6s' }}
						src='/static/doodles/hero/dino.svg'
						alt='chrome dino'
						width={100}
						height={100}
					/>
					<Image
						className='sqD w-[10rem] aspect-square right-[-20px] sm:right-0 bottom-[-180px] lg:[5%]'
						style={{ animationDelay: '0.7s' }}
						src='/static/doodles/hero/paintbrush.svg'
						alt='paint logo'
						width={120}
						height={120}
					/>
					<Image
						className='sqD squiggle-hero-pop1 w-[8rem] aspect-square top-[-110px] opacity-75 sm:block sm:top-[-120px] sm:left-[15%] sm:opacity-100'
						src='/static/doodles/hero/pop1.svg'
						alt='pop logo'
						width={130}
						height={130}
					/>
					<Image
						className='sqD left-[-35px] w-[2.7rem] aspect-square bottom-[-85px] sm:bottom-[-70px] sm:left-5 opacity-40'
						style={{ animationDelay: '0.9s' }}
						src='/static/doodles/hero/code.svg'
						alt='code logo'
						width={100}
						height={100}
					/>
				</h1>
				<Link
					href='#projects'
					className='cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white text-white bg-black hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors'
				>
					Projects
				</Link>
			</div>
		</>
	);
}

export default Hero;
