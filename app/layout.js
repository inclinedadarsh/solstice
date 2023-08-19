/* eslint-disable react/jsx-filename-extension */

import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from '@/context/ThemeContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Solstice',
	description: 'A simple and clean Full Stack Next.js project.',
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-primary-bg text-primary-text dark:bg-primary-bg--dark dark:text-primary-text--dark container w-5/6 mx-auto py-4 min-h-screen flex flex-col justify-between gap-12 transition-colors`}
			>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
