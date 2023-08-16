/* eslint-disable react/jsx-filename-extension */
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Solstice',
	description: 'A simple and clean Full Stack Next.js project.',
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
