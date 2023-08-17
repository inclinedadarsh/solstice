import Link from 'next/link';

import { Twitter, Instagram, Globe2, Github } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="flex justify-between items-center">
			<div className="">&copy; Copyright 2023, Adarsh Dubey.</div>
			<ul className="flex gap-4">
				<li>
					<Link
						className="p-3 rounded-full hover:bg-secondary-bg dark:hover:bg-secondary-bg--dark flex"
						href="https://twitter.com/inclinedadarsh"
					>
						<Twitter size={20} strokeWidth="1.5" />
					</Link>
				</li>
				<li>
					<Link
						className="p-3 rounded-full hover:bg-secondary-bg dark:hover:bg-secondary-bg--dark flex"
						href="https://github.com/inclinedadarsh"
					>
						<Github size={20} strokeWidth="1.5" />
					</Link>
				</li>
				<li>
					<Link
						className="p-3 rounded-full hover:bg-secondary-bg dark:hover:bg-secondary-bg--dark flex"
						href="https://instagram.com/inclinedadarsh"
					>
						<Instagram size={20} strokeWidth="1.5" />
					</Link>
				</li>
				<li>
					<Link
						className="p-3 rounded-full hover:bg-secondary-bg dark:hover:bg-secondary-bg--dark flex"
						href="https://adarshdubey.com/"
					>
						<Globe2 size={20} strokeWidth="1.5" />
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
