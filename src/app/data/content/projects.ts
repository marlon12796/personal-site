import { type PersonalProject } from '@/types'
const generateImagePaths = (projectName: string, imageNames: string[]) =>
  imageNames.map((imageName) => `/projects/${projectName}/${imageName}`)

export const projects: Record<
  string,
  {
    images: PersonalProject['images']
    stack: PersonalProject['stack']
    mainPath: PersonalProject['mainPath']
    isCover: PersonalProject['isCover']
  }
> = {
  project1: {
    mainPath: 'tic-tac-toe',
    isCover: true,
    images: generateImagePaths('tic-tac-toe', ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp']),
    stack: ['React', 'JavaScript', 'Zustand', 'Vite', 'TypeScript']
  },
  project2: {
    mainPath: 'tetris',
    isCover: true,
    images: generateImagePaths('tetris', ['1.webp', '2.webp', '3.webp']),
    stack: ['TypeScript', 'Vite', 'Zustand', 'CSS', 'React']
  },
  project3: {
    mainPath: 'weather',
    isCover: true,
    images: generateImagePaths('weather', ['1.webp', '2.webp', '3.webp', '4.webp']),
    stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'React']
  },
  project4: {
    mainPath: 'movies',
    isCover: true,
    images: generateImagePaths('movies', ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp']),
    stack: ['TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'React']
  },
  project5: {
    mainPath: 'tasks',
    isCover: false,
    images: generateImagePaths('tasks', ['1.webp', '2.webp', '3.webp', '4.webp']),
    stack: ['Docker', 'React Hook Form', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zustand']
  },
  project6: {
    mainPath: 'tateti',
    isCover: false,
    images: generateImagePaths('tateti', ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp']),
    stack: ['Angular', 'Nestjs', 'Docker', 'TypeScript', 'Tailwind CSS', 'Vite', 'CSS']
  }
}
