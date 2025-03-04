import { useTranslations } from 'next-intl';
import Subtitle from '../Subtitle';
import { ProjectGroup } from './ProjectGroup';
import { ProjectContainerCarousel } from './ProjectContainerCarousel';
import { projectKeys } from '@/app/data/content/projects';

export const ListProjects: React.FC = () => {
	const h = useTranslations('home');
	const chunkArray = (array: typeof projectKeys, size: number) => {
		const chunks = [];
		for (let i = 0; i < array.length; i += size) {
			chunks.push(array.slice(i, i + size));
		}
		return chunks;
	};
	const groupedKeys = chunkArray(projectKeys, 4);

	return (
		<section className='w-full px-4 my-16 max-w-screen-xl' id='projects'>
			<Subtitle text={h('projectsTitle')} />
			<span className='text-slate-300 block mt-4'>{h('projectsDescription')}</span>
			<ProjectContainerCarousel>
				{groupedKeys.map((group, index) => (
					<ProjectGroup group={group} key={index} />
				))}
			</ProjectContainerCarousel>
		</section>
	);
};
