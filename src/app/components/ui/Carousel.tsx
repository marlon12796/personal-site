'use client';
import Image from 'next/image';
import { Button } from './Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ElementRef, useMemo, useRef, useState } from 'react';
import { throttle } from 'throttle-debounce';

type Props = {
	images: string[];
	imgWidth: number;
	imgHeight: number;
};

const Carousel = ({ images, imgWidth, imgHeight }: Props) => {
	const ref = useRef<ElementRef<'div'>>(null);
	const [selected, setSelected] = useState(0);

	const onScroll = useMemo(
		() =>
			throttle(200, () => {
				if (!ref.current) return;
				setSelected(Math.round(ref.current.scrollLeft / ref.current.offsetWidth));
			}),
		[]
	);

	const slide = (direction: 'left' | 'right') => {
		ref.current?.children[selected + (direction === 'left' ? -1 : 1)]?.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start',
		});
	};

	return (
		<div className='relative max-h-full w-full h-full'>
			<div
				ref={ref}
				className='w-full h-full no-scrollbar overflow-auto snap-x snap-mandatory flex relative'
				onScroll={onScroll}
			>
				{images.map((x, i) => (
					<Image
						key={i}
						src={x}
						width={imgWidth}
						height={imgHeight}
						alt='preview'
						className='w-full h-auto shrink-0 snap-start object-cover snap-always'
					/>
				))}
			</div>
			{selected > 0 && (
				<Button
					onClick={() => slide('left')}
					variant='ghost'
					size='icon'
					className='absolute bottom-1/2 left-1 translate-y-1/2 rounded-full bg-white/70 p-0 w-8 h-8 shadow-md hidden md:flex'
				>
					<ChevronLeft className='text-black/30' />
				</Button>
			)}
			{selected < images.length - 1 && (
				<Button
					onClick={() => slide('right')}
					variant='ghost'
					size='icon'
					className='absolute bottom-1/2 right-1 translate-y-1/2 rounded-full bg-white/70 p-0 w-8 h-8 shadow-md hidden md:flex'
				>
					<ChevronRight className='text-black/30' />
				</Button>
			)}
			<div className='flex gap-1 absolute bottom-4 right-1/2 translate-x-1/2 bg-black/20 p-1 rounded-full'>
				{images.length > 1 &&
					images.map((x, i) => (
						<span key={i} className={`w-1.5 h-1.5 bg-white rounded-full ${selected !== i && 'opacity-40'}`}></span>
					))}
			</div>
		</div>
	);
};

export default Carousel;
