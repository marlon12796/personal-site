type Route = {
	title: string;
	path: string;
};

type FooterLink = {
	name: string;
	href: string;
	icon?: string;
	leavesWebsite?: boolean;
};

type FooterCol = {
	label: string;
	items: FooterLink[];
};

type Footer = {
	columns: FooterCol[];
};

export const routes: Route[] = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Projects',
		path: '/projects',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
];

export const footer: Footer = {
	columns: [
		{
			label: 'Pages',
			items: [
				{
					name: 'Home',
					href: '/',
				},
				{
					name: 'Projects',
					href: '/projects',
				},
				{
					name: 'Contact',
					href: '/contact',
				},
			],
		},
		{
			label: 'Social',
			items: [
				{
					name: 'GitHub',
					href: 'https://github.com/marlon12796',
					icon: '/static/icons/github-f.svg',
					leavesWebsite: true,
				},
				{
					name: 'LinkedIn',
					href: 'https://www.linkedin.com/in/braydentw/',
					icon: '/static/icons/linkedin-f.svg',
					leavesWebsite: true,
				},
				{
					name: 'Email',
					href: 'mailto:fabrisio021@gmail.com',
					icon: '/static/icons/mail-f.svg',
					leavesWebsite: true,
				},
			],
		},
	],
};
