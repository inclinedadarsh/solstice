import Image from 'next/image';
import CustomButton from '@/components/CustomButton';

const About = () => {
	return (
		<div>
			<div className="w-full h-[240px] overflow-hidden relative">
				<Image
					src="https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg"
					alt="Background"
					fill
					className="object-cover z-0"
				/>
				<div className="absolute z-1 bottom-5 left-5 text-primary-text w-full md:w-3/4">
					<h1 className="text-3xl font-semibold mb-4">
						Web Dev, UX & Machine Learning
					</h1>
					<p>
						I love to collaborate with people and explore different
						fields. I love working on new and innovative ideas. If
						you have any ideas in mind, do contact me and maybe we
						can build something unique.
					</p>
				</div>
			</div>
			<div className="flex md:flex-row flex-col gap-10 mt-12">
				<div className="flex-1 flex gap-5  flex-col">
					<h2 className="text-3xl font-semibold">Who am I?</h2>
					<div className="flex flex-col gap-6">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Assumenda explicabo unde eaque ut debitis
							eius, sequi minima repudiandae nihil sed!
						</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Consectetur ipsum nesciunt repudiandae tenetur
							omnis earum beatae aperiam, ad possimus minima animi
							deleniti veritatis exercitationem dolorem, error
							iusto rerum commodi dignissimos praesentium dolore
							quae? Aliquid esse asperiores dolore corporis
							eligendi vero libero. Quaerat, at aperiam. Rerum,
							voluptatem omnis? Necessitatibus similique quaerat
							reiciendis non ad quidem optio? Similique ut, at
							minima earum reiciendis porro ullam, laudantium
							provident rerum blanditiis consectetur et sed?
						</p>
					</div>
				</div>
				<div className="flex-1 flex gap-5 flex-col">
					<h2 className="text-3xl font-semibold">What I do?</h2>
					<div className="flex flex-col gap-6">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Tempora ipsa in nemo nobis minima vero totam
							beatae nulla adipisci quas. Suscipit, quisquam
							voluptatem blanditiis eligendi eveniet, pariatur
							dolor consequatur beatae laborum ullam ipsam quis?
							Odit molestias minima molestiae eveniet dolor?
						</p>
						<ul className="list-disc list-outside ">
							<li>Lorem ipsum dolor sit.</li>
							<li>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Et dolores quibusdam ab soluta
								animi.
							</li>
							<li>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Vero, autem.
							</li>
						</ul>
						<CustomButton
							text="Contact me"
							url="/contact"
							type="secondary"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
