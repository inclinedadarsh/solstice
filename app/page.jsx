import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import heroImage from '@/assets/hero.png';

const Home = () => {
	return (
		<main className="flex gap-10 flex-col md:flex-row">
			<div className="flex flex-col flex-1 justify-center">
				<h1 className="text-4xl md:text-5xl font-bold">
					Helping startups with purpose driven websites.
				</h1>
				<p className="text-base md:text-lg my-8">
					Turning your idea into realtiy. I&apos;m a Web Designer &
					Developer who solves business problems with aesthetic
					designs and functional websites
				</p>
				<CustomButton
					text="See my work"
					url="/portfolio"
					type="primary"
					icon={<ArrowUpRight size={20} strokeWidth="1.5" />}
				/>
			</div>
			<div className="flex-1">
				<Image
					src={heroImage}
					alt="Hero Illustrations"
					// className="w-full"
				/>
			</div>
		</main>
	);
};

export default Home;
