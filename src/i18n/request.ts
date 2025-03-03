'server-only';

import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/config';
import { routing } from './routing';

// export function isValidLocale(locale: unknown): locale is Locale {
// 	return locales.some((l) => l === locale);
// }

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;
	// if (!isValidLocale(locale)) notFound();
	if (!locale || !routing.locales.includes(locale as 'en' | 'es')) locale = routing.defaultLocale;

	// if (!isValidLocale(baseLocale)) notFound();

	return {
		messages: {
			...(await import(`../locales/contact/${locale}.json`)).default,
			...(await import(`../locales/about/${locale}.json`)).default,
			...(await import(`../locales/home/${locale}.json`)).default,
			...(await import(`../locales/layout/${locale}.json`)).default,
		},
		locale: locale,
		defaultLocale: routing.defaultLocale,
		locales: routing.locales,
	};
});
