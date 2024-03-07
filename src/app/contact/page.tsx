import Image from 'next/image';
import { ContactForm } from '../components/ContactForm';
import { contactMethods } from '../data/content/contact';
import imgSetup from '../../../public/static/setup.webp';
import { Toaster } from '@/components/ui/sonner';
const Page = () => {
	return (
		<main>
			<div className='max-w-screen-xl mx-auto px-4  md:px-8'>
				<div className='relative flex flex-col md:flex-row-reverse gap-6 md:items-center'>
					<div className='relative min-h-[14rem] md:basis-[40%] md:[min-block-size:15rem]'>
						<Image
							src={imgSetup}
							fill
							alt='setup pc'
							className='object-cover'
							sizes='75vw'
							priority
							placeholder='blur'
						/>
					</div>
					<div className='space-y-3 basis-[60%] '>
						<h2 className='text-indigo-600 font-semibold '>Contact</h2>
						<p className='text-slate-300 text-3xl animate-background-shine font-semibold sm:text-4xl  bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text  text-transparent'>
							Let us know how we can help
						</p>
						<p className='text-slate-400'>
							We are here to help and answer any question you might have, We look forward to hearing from you.
						</p>
					</div>
				</div>

				<div>
					<ul className='mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24'>
						{contactMethods.map((item, idx) => (
							<li key={idx}>
								<h3 className='text-slate-300 text-lg font-medium'>{item.title}</h3>
								<div className='mt-3 flex items-center gap-x-3'>
									<div className='flex-none text-gray-200'>{item.icon}</div>
									<p className='text-slate-400'>{item.contact}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				<ContactForm />
				<Toaster />
			</div>
		</main>
	);
};

export default Page;
