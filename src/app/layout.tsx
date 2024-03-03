import type { Metadata } from 'next';
import { Noto_Sans_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Footer from './components/Footer';

const notoSansMono = Noto_Sans_Mono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700', '800'] });

export const metadata: Metadata = {
	title: 'Marlon Ureta | Software Developer',
	description: "Marlon's developer portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={notoSansMono.className}>
			<body className={'max-w-6xl m-auto flex  flex-col bg-foreground min-h-[100dvh] overflow-x-hidden'}>
				<header className='sticky top-0 bg-slate-950 z-[500]'>
					<MobileNavbar />
				</header>

				{children}
				<Footer />
			</body>
		</html>
	);
}
