import Link from 'next/link';

const Portfolio = () => {
	return (
		<div>
			<h2 className="text-2xl font-bold mt-10">Choose a gallery</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
				<Link
					href="/portfolio/illustrations"
					className="group block h-96 border-2 border-secondary-bg dark:border-secondary-bg--dark relative bg-illustrations bg-cover bg-center"
				>
					<span className="transition-all absolute bottom-4 left-4 font-semibold text-xl group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 md:group-hover:text-3xl group-hover:text-2xl">
						Illustrations
					</span>
				</Link>
				<Link
					href="/portfolio/websites"
					className="group block h-96 border-2 border-secondary-bg dark:border-secondary-bg--dark relative bg-websites bg-cover bg-center"
				>
					<span className="transition-all absolute bottom-4 left-4 font-semibold text-xl group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 md:group-hover:text-3xl group-hover:text-2xl">
						Websites
					</span>
				</Link>
				<Link
					href="/portfolio/applications"
					className="group block h-96 border-2 border-secondary-bg dark:border-secondary-bg--dark relative bg-applications bg-cover bg-center"
				>
					<span className="transition-all absolute bottom-4 left-4 font-semibold text-xl group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 md:group-hover:text-3xl group-hover:text-2xl">
						Applications
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;
