'use client';

import Link from 'next/link';

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
				<button
					type="button"
					className="px-5 py-3 font-semibold border-2 rounded-lg text-sm border-secondary-bg hover:bg-secondary-bg dark:border-secondary-bg--dark dark:hover:bg-secondary-bg--dark"
				>
					Logout
				</button>
			</ul>
		</nav>
	);
};

export default Navbar;
