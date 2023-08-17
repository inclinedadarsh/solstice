'use client';

import Link from 'next/link';
import { LogOut } from 'lucide-react';
import CustomButton from './CustomButton';

const links = [
	{
		id: 1,
		title: 'Home',
		url: '/',
	},
	{
		id: 2,
		title: 'Portfolio',
		url: '/portfolio',
	},
	{
		id: 3,
		title: 'Blog',
		url: '/blog',
	},
	{
		id: 4,
		title: 'About',
		url: '/about',
	},
	{
		id: 5,
		title: 'Contact',
		url: '/contact',
	},
	{
		id: 6,
		title: 'Dashboard',
		url: '/dashboard',
	},
];

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center">
			<Link href="/" className="font-bold text-lg">
				Solstice
			</Link>
			<ul className="flex gap-5 items-center">
				{links.map((item) => (
					<li>
						<Link href={item.url} key={item.id}>
							{item.title}
						</Link>
					</li>
				))}
				<CustomButton
					type="secondary"
					text="Logout"
					url="/"
					icon={<LogOut size={20} strokeWidth={1.5} />}
				/>
			</ul>
		</nav>
	);
};

export default Navbar;
