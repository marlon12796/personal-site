import { mainTechnologies, technologies } from '@/app/data/Thecnologies';
import Subtitle from '../Subtitle';

const Technologies = () => {
	return (
		<section className='w-full px-4 mb-16'>
			<div className='mx-auto max-w-screen-xl'>
				<Subtitle text='Technologies' />
				<div className='flex flex-col'>
					{Object.keys(mainTechnologies).map((category) => (
						<div key={category}>
							<h3 className='text-md text-slate-500 mt-4 mb-2'>{category}</h3>
							<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
								{mainTechnologies[category].map((tech) =>
									Boolean(technologies[tech]) ? (
										<li
											key={tech}
											className='flex items-center gap-4 p-3 rounded-md bg-gradient-to-r from-slate-800 to-purple-900/10'
										>
											<span
												className={`[&>svg]:w-5 [&>svg]:aspect-square p-2 rounded-lg ${technologies[tech].bgColor}`}
											>
												{technologies[tech].icon}
											</span>
											<span className='text-slate-200 text-sm'>{tech}</span>
										</li>
									) : null
								)}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
