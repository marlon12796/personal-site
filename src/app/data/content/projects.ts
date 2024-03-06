import { PersonalProject } from '@/types';

export const projects: PersonalProject[] = [
	{
		name: 'Tic Tac Toe!',
		description:
			'A fun and engaging twist on the classic Tic Tac Toe game, offering exciting gameplay modes for both single and multiplayer. Each play introduces new emojis, adding a unique touch to the experience.',
		images: [
			'/projects/Tic-Tac-Toe/main.webp',
			'/projects/Tic-Tac-Toe/2.webp',
			'/projects/Tic-Tac-Toe/3.webp',
			'/projects/Tic-Tac-Toe/4.webp',
			'/projects/Tic-Tac-Toe/5.webp',
		],
		stack: ['React', 'JavaScript', 'Zustand', 'Vite', 'TypeScript'],
		githubLink: 'https://github.com/marlon12796/Tic-Tac-Toe-Emoji',
		previewLink: 'https://marlon12796.github.io/Tic-Tac-Toe-Emoji/',
	},
	{
		name: 'Tetris',
		description:
			'An addictive Tetris clone with a modern twist, designed to challenge both new players and seasoned pros.',
		images: ['/projects/tetris/main.webp', '/projects/tetris/1.webp', '/projects/tetris/2.webp'],
		stack: ['TypeScript', 'Vite', 'Zustand', 'CSS', 'React'],
		githubLink: 'https://github.com/marlon12796/tetris/',
		previewLink: 'https://marlon12796.github.io/tetris/',
	},
	{
		name: 'Weather Forecast',
		description: 'A weather forecast application with a minimalistic design and easy-to-use interface.',
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
		description: 'An application for exploring movies, featuring a sleek design and intuitive user experience.',
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
