import { PersonalProject } from '@/types';

export const projects: PersonalProject[] = [
	{
		name: 'Tic Tac Toe!',
		description:
			'A full-stack web application. Play AI-generated trivias about different topics such as art, entertainment, geography, history and science.',
		images: [
			'/projects/Tic-Tac-Toe/main.png',
			'/projects/Tic-Tac-Toe/1.jpg',
			'/projects/Tic-Tac-Toe/2.jpg',
			'/projects/Tic-Tac-Toe/3.jpg',
			'/projects/Tic-Tac-Toe/4.jpg',
			'/projects/Tic-Tac-Toe/5.jpg',
		],
		stack: ['React', 'JavaScript', 'Zustand', 'Vite', 'TypeScript'],
		githubLink: 'https://github.com/marlon12796/Tic-Tac-Toe-Emoji',
		previewLink: 'https://marlon12796.github.io/Tic-Tac-Toe-Emoji/',
	},
	{
		name: 'Tetris',
		description: 'A portable Yuzu Emulator version manager for Windows.',
		images: ['/projects/tetris/main.webp', '/projects/tetris/1.jpg', '/projects/tetris/2.jpg'],
		stack: ['TypeScript', 'Vite', 'Zustand', 'CSS', 'React'],
		githubLink: 'https://github.com/marlon12796/tetris/',
		previewLink: 'https://marlon12796.github.io/tetris/',
	},
	{
		name: 'Weather Forecast',
		description: 'A portable Yuzu Emulator version manager for Windows.',
		images: [
			'/projects/weather/main.svg',
			'/projects/weather/1.webp',
			'/projects/weather/2.webp',
			'/projects/weather/3.webp',
		],
		stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'React'],
		githubLink: 'https://github.com/marlon12796/open-weather',
		previewLink: 'https://open-weather-lyart.vercel.app/',
	},
	{
		name: 'Movies App',
		description: 'A portable Yuzu Emulator version manager for Windows.',
		images: [
			'/projects/movies/main.webp',
			'/projects/movies/1.webp',
			'/projects/movies/2.webp',
			'/projects/movies/3.webp',
			'/projects/movies/4.webp',
		],
		stack: ['TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'React'],
		githubLink: 'https://github.com/marlon12796/t-movies/',
		previewLink: 'https://marlon12796.github.io/t-movies/',
	},
];
//  '/projects/tetris/2.jpg';
