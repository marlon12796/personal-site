'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export type CaseVideoPlayerProps = {
	src: string;
	poster?: string;
	title?: string;
	accentColor?: 'teal' | 'cyan' | 'amber' | 'violet';
	autoPlay?: boolean;
};

export const CaseVideoPlayer: React.FC<CaseVideoPlayerProps> = ({
	src,
  poster = '/projects/campus/home-students.webp',
	title = 'Presentación Oficial del Campus Virtual',
	accentColor = 'teal',
	autoPlay = false,
}) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [hasStarted, setHasStarted] = useState(false);

	const togglePlay = () => {
		if (!videoRef.current) return;
		if (videoRef.current.paused) {
			videoRef.current.play();
			setIsPlaying(true);
			setHasStarted(true);
		} else {
			videoRef.current.pause();
			setIsPlaying(false);
		}
	};

	const toggleMute = () => {
		if (!videoRef.current) return;
		videoRef.current.muted = !videoRef.current.muted;
		setIsMuted(videoRef.current.muted);
	};

	const handleFullScreen = () => {
		if (!videoRef.current) return;
		if (videoRef.current.requestFullscreen) {
			videoRef.current.requestFullscreen();
		}
	};

	return (
		<div className='group relative w-full overflow-hidden rounded-2xl border border-teal-400/35 bg-[#050b14] shadow-[0_0_40px_rgba(45,212,191,0.22)]'>
			{/* Neon top line */}
			<div className='pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-teal-300 to-transparent' />

			{/* Video element */}
			<video
				ref={videoRef}
				src={src}
				poster={poster}
				preload='metadata'
				playsInline
				controls
				autoPlay={autoPlay}
				onPlay={() => {
					setIsPlaying(true);
					setHasStarted(true);
				}}
				onPause={() => setIsPlaying(false)}
				className='h-auto w-full aspect-video object-cover'
			/>

			{/* Custom Play Overlay (visible before playing) */}
			{!hasStarted && (
				<button
					type='button'
					onClick={togglePlay}
					className='absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all hover:bg-black/25'
					aria-label='Reproducir video de presentación'
				>
					<div className='flex h-16 w-16 items-center justify-center rounded-full border border-teal-300/60 bg-teal-400/90 text-slate-950 shadow-[0_0_35px_rgba(45,212,191,0.7)] transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20'>
						<Play className='h-7 w-7 translate-x-0.5 fill-slate-950 sm:h-9 sm:w-9' />
					</div>
					<div className='mt-4 flex items-center gap-2 rounded-full border border-teal-300/30 bg-slate-950/80 px-4 py-1.5 text-xs font-semibold text-teal-200 shadow-[0_0_20px_rgba(45,212,191,0.3)] backdrop-blur-md'>
						<span className='h-2 w-2 rounded-full bg-teal-400 animate-pulse' />
						<span>{title}</span>
					</div>
				</button>
			)}
		</div>
	);
};
