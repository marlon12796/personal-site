import { useTranslations } from 'next-intl';
import { ProjectKey, projects } from '@/app/data/content/projects';
import ProjectCard from '@/components/project/ProjectCard';
import styles from '@/components/carousel/Carousel.module.css';
type ProjectGroupProps = {
	group: ProjectKey[];
};

export const ProjectGroup: React.FC<ProjectGroupProps> = ({ group }) => {
	const t = useTranslations('home.projects');

	return (
		<li className={`${styles['embla__slide']} h-fit grid gap-4 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 mt-8`}>
			{group.map((key) => (
				<ProjectCard
					key={key}
					project={{
						name: t(`${key}.name`),
						description: t(`${key}.description`),
						stack: projects[key].stack,
						images: projects[key].images,
						previewLink: t(`${key}.previewLink`),
						githubLink: t(`${key}.githubLink`),
						mainPath: projects[key].mainPath,
						isCover: projects[key].isCover,
					}}
				/>
			))}
		</li>
	);
};
