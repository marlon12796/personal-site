import { defineRouting } from 'next-intl/routing';
import { locales, pathnames } from './config';

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: locales,
	pathnames: pathnames,
	defaultLocale: 'en',
});
