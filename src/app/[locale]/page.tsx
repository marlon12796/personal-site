import { Hero } from '@/components/home/Hero';
import { ListProjects } from '@/components/project/ListProjects';
import { Technologies } from '@/components/technology/Technologies';
import { setRequestLocale } from 'next-intl/server';
type Props = {
	params: Promise<{ locale: string }>;
};

const Home = async ({ params }: Props) => {
	const locale = (await params).locale;
	setRequestLocale(locale);
	return (
		<main className='flex min-h-screen flex-col items-center justify-between '>
			<Hero />
			<ListProjects />
			<Technologies />
		</main>
	);
};
export default Home;
