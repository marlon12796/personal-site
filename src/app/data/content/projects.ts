import { PersonalProject } from '@/types'

export const projects: Record<
  string,
  {
    images: PersonalProject['images']
    stack: PersonalProject['stack']
  }
> = {
  project1: {
    images: [
      '/projects/Tic-Tac-Toe/main.webp',
      '/projects/Tic-Tac-Toe/2.webp',
      '/projects/Tic-Tac-Toe/3.webp',
      '/projects/Tic-Tac-Toe/4.webp',
      '/projects/Tic-Tac-Toe/5.webp'
    ],
    stack: ['React', 'JavaScript', 'Zustand', 'Vite', 'TypeScript']
  },
  project2: {
    images: ['/projects/tetris/main.webp', '/projects/tetris/1.webp', '/projects/tetris/2.webp'],
    stack: ['TypeScript', 'Vite', 'Zustand', 'CSS', 'React']
  },
  project3: {
    images: ['/projects/weather/main.svg', '/projects/weather/1.webp', '/projects/weather/2.webp', '/projects/weather/3.webp'],
    stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'React']
  },
  project4: {
    images: [
      '/projects/movies/main.webp',
      '/projects/movies/1.webp',
      '/projects/movies/2.webp',
      '/projects/movies/3.webp',
      '/projects/movies/4.webp'
    ],
    stack: ['TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'React']
  },
  project5: {
    images: ['/projects/tasks/main.jpg', '/projects/tasks/1.jpg', '/projects/tasks/2.jpg', '/projects/tasks/3.jpg'],
    stack: ['Docker', 'React Hook Form', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zustand']
  }
}
