import { type Locale, locales } from '@/i18n/config';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
export const NavbarLanguages = () => {
	const [isPending, startTransition] = useTransition();

	const router = useRouter();
	const value = useLocale();
	const pathname = usePathname();
	const params = useParams();
	const onSelectChange = (val: string) => {
		const nextLocale = val as Locale;
		startTransition(() => {
			// @ts-expect-error -- TypeScript will validate that only known `params
			router.replace({ pathname, params }, { locale: nextLocale });
		});
	};
	return (
		<Select onValueChange={(val) => onSelectChange(val)} defaultValue={value}>
			<SelectTrigger className='w-max bg-slate-900 text-slate-200 m-0 md:-order-1'>
				<SelectValue placeholder='Idiomas' className='' />
			</SelectTrigger>
			<SelectContent className='z-[600] bg-slate-900'>
				{locales.map((cur) => (
					<SelectItem className=' in-hover:hover:bg-slate-800' value={cur} key={cur} disabled={isPending}>
						{cur.toUpperCase()}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
