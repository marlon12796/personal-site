import { projects } from '@/app/data/content/projects';
import Subtitle from './Subtitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
	return (
		<section className='w-full px-4 my-16'>
			<article className='mx-auto max-w-screen-xl w-full '>
				<Subtitle text='My projects' />
				<span className='text-slate-300 block mt-4'>
					Here are a few things I&apos;ve created during my free time. 🧑‍💻
				</span>
				<div className='grid gap-2 grid-cols-1 sm:grid-cols-2 mt-8'>
					{projects.map((x) => (
						<ProjectCard key={x.name} project={x} />
					))}
				</div>
			</article>
		</section>
	);
};

export default Projects;
