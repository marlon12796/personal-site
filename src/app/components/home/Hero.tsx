'use client';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
function Hero() {
	return (
		<>
			<div
				className='relative heroElem w-full [padding-block:5em] flex justify-center text-center flex-col items-center z-1'
				style={{ maxWidth: '1200px' }}
			>
				<p className='text-xl mb-5 text-white'>Hey, I&apos;m Marlon.</p>
				<h1 className='heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg text-white'>
					I enjoy <span className='heroShiny1 text-blue-500'>building</span> and{' '}
					<span className='heroShiny2 text-blue-500'>designing</span> for the web.
					<Image
						className='sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]'
						style={{ animationDelay: '0.1s' }}
						src='/static/doodles/hero/html.svg'
						alt='HTML Logo'
						width={100}
						height={100}
					/>
					<Image
						className='sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11'
						style={{ animationDelay: '0.2s' }}
						src='/static/doodles/hero/nextjs.svg'
						alt='Nextjs Logo'
						width={100}
						height={100}
					/>
					<Image
						className='sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[400px]'
						style={{ animationDelay: '0.3s' }}
						src='/static/doodles/hero/brayden.svg'
						alt='Logo Creator'
						width={100}
						height={100}
					/>
					<Image
						className='sqD hidden sm:block bottom-[-340px] left-[-180px]'
						style={{ animationDelay: '0.4s' }}
						src='/static/doodles/hero/coder.svg'
						alt='coder'
						width={100}
						height={100}
					/>
					<Image
						className='sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]'
						style={{ animationDelay: '0.5s' }}
						src='/static/doodles/hero/js.svg'
						alt='hero logo'
						width={100}
						height={100}
					/>
					<Image
						className='sqD bottom-[-320px] right-[65%] sm:right-[45%]'
						style={{ animationDelay: '0.6s' }}
						src='/static/doodles/hero/dino.svg'
						alt='chrome dino'
						width={100}
						height={100}
					/>
					<Image
						className='sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]'
						style={{ animationDelay: '0.7s' }}
						src='/static/doodles/hero/paintbrush.svg'
						alt='paint logo'
						width={100}
						height={100}
					/>
					<Image
						className='sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]'
						src='/static/doodles/hero/pop1.svg'
						alt='pop logo'
						width={100}
						height={100}
					/>
					<Image
						className='sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40'
						style={{ animationDelay: '0.9s' }}
						src='/static/doodles/hero/code.svg'
						alt='code logo'
						width={100}
						height={100}
					/>
				</h1>
				<ScrollLink activeClass='active' to='learnmore' spy={true} offset={-30} smooth={true} duration={500}>
					<div className='cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white text-white bg-black hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors'>
						Tell me more
					</div>
				</ScrollLink>
			</div>
		</>
	);
}

export default Hero;
