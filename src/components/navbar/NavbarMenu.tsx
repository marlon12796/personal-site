import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/navigation';
import { NavbarLanguages } from './NavbarLanguages';

const NavbarMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
	const keys = ['home', 'about', 'contact'] as const;
	const t = useTranslations('layout');

	const pathname = usePathname();
	return (
		<ul
			className={cn(
				` text-lg px-4 max-md:flex-1 max-md:fixed transition-transform  max-md:space-y-6  max-md:-translate-x-full max-md:bg-[#020817] max-md:m-0 max-md:h-svh max-md:inset-[72px_0] md:items-center md:gap-4 md:mt-0 md:flex md:justify-between md:min-w-[26rem]`,
				{
					'max-md:translate-x-0': isMenuOpen,
					'max-md:-translate-x-full': !isMenuOpen,
				}
			)}
		>
			{keys.map((key, idx) => (
				<li
					key={idx}
					className={cn('text-gray-300 relative', {
						'text-gray-100 md:after:content-[" "] md:after:border-gray-300 md:after:absolute md:after:w-full md:after:h-full md:after:border-b md:after:top-0':
							t(`routes.${key}.path`) === pathname,
						'hover:text-gray-400': t(`routes.${key}.path`) !== pathname,
					})}
				>
					<Link href={t(`routes.${key}.path`)} className='block'>
						{t(`routes.${key}.title`)}
					</Link>
				</li>
			))}
			<NavbarLanguages />
		</ul>
	);
};

export default NavbarMenu;
