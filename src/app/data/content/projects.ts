import { type PersonalProject } from "@/types";

const generateImagePaths = (projectName: string, imageNames: string[]) =>
  imageNames.map((imageName) => `/projects/${projectName}/${imageName}`);

export const projectKeys = [
  "project1",
  "project2",
  "project3",
  "project4",
] as const;
export type ProjectKey = (typeof projectKeys)[number];

export const projects: Record<
  ProjectKey,
  {
    images: PersonalProject["images"];
    stack: PersonalProject["stack"];
    mainPath: PersonalProject["mainPath"];
    isCover: PersonalProject["isCover"];
  }
> = {
  project1: {
    mainPath: "code-editor",
    isCover: false,
    images: generateImagePaths("code-editor", [
      "1.webp",
      "2.webp",
      "3.webp",
      "4.webp",
      "5.webp",
    ]),
    stack: ["Docker", "TypeScript", "Next.js", "Vite", "SQL", "Tailwind CSS"],
  },

  project2: {
    mainPath: "tetris",
    isCover: true,
    images: generateImagePaths("tetris", ["1.webp", "2.webp", "3.webp"]),
    stack: ["TypeScript", "Vite", "Zustand", "CSS", "React"],
  },
  project3: {
    mainPath: "spotify-clone",
    isCover: false,
    images: generateImagePaths("spotify-clone", [
      "1.webp",
      "2.webp",
      "3.webp",
      "4.webp",
      "5.webp",
      "6.webp",
    ]),
    stack: ["TypeScript", "Vite", "Zustand", "Tailwind CSS", "React", "SQL"],
  },

  project4: {
    mainPath: "movies",
    isCover: true,
    images: generateImagePaths("movies", [
      "1.webp",
      "2.webp",
      "3.webp",
      "4.webp",
      "5.webp",
    ]),
    stack: ["TypeScript", "Redux Toolkit", "Tailwind CSS", "Vite", "React"],
  },
};
