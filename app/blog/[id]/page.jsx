import Image from 'next/image';

const BlogPost = () => {
	return (
		<div>
			<div className="flex gap-5 flex-col md:flex-row items-center">
				<div className="flex-1 flex gap-6 flex-col">
					<h2 className="text-2xl md:text-3xl font-bold">
						The title here
					</h2>
					<p className="text-secondary-text--dark">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Explicabo praesentium deleniti ea, necessitatibus veniam
						corporis aspernatur, assumenda odio accusamus aliquid
						earum saepe. Soluta odit consectetur at et asperiores
						error accusamus vel vitae, qui possimus. Aliquam facere
						est laboriosam enim minima tempore sit provident
						praesentium corrupti, maiores suscipit nobis cupiditate
						eum?
					</p>
					<div className="flex gap-4">
						<Image
							width={50}
							height={50}
							className="rounded-full"
						/>
						<span>Author Name</span>
					</div>
				</div>
				<div className="flex-1 relative">
					<Image
						src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=384&q=80"
						alt="Illustration"
						width="1000"
						height="1000"
						className="w-full max-h-80 object-cover"
					/>
				</div>
			</div>
			<div className="border border-secondary-bg dark:border-secondary-bg--dark my-6" />
			<div className=" text-secondary-text dark:text-secondary-text--dark flex flex-col gap-4">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptatibus reiciendis quae obcaecati saepe hic numquam
					blanditiis, ipsum expedita. Quod ad, amet ut eos voluptatum
					optio omnis expedita quasi dolores quis non et minus eveniet
					esse est dignissimos fugit quisquam facilis architecto nam
					laudantium eius? Facere inventore quos exercitationem
					mollitia, autem tempore dolore consequatur nulla laboriosam
					ullam similique fugit quisquam, rem reprehenderit.
					Aspernatur corporis nulla facere adipisci iure fugiat natus,
					sint dolorum molestiae, esse eum sed magni suscipit laborum
					facilis officiis id recusandae? Ex quo, aliquam sapiente
					minima totam neque ea, magni facere ab rem fuga fugiat iure
					error doloribus nobis!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente earum vel, deserunt, sint voluptates voluptatibus
					nulla quasi quibusdam ipsam beatae eius dolores dignissimos
					eaque asperiores error quidem reiciendis, autem mollitia
					quod cumque aperiam amet ab repellendus. Quidem adipisci eum
					fugiat beatae rem. In et quis, quas ad eius similique est
					deleniti quae placeat, exercitationem dolore dolor tempore
					vitae possimus ipsum amet maiores sit cupiditate ducimus, at
					nisi iusto? Libero est nisi, nesciunt quia nulla iste nobis
					fugiat? Quam corrupti iste quia iure dolores esse vel illo
					officiis sed ipsa maiores repudiandae ab id tenetur vitae
					necessitatibus quas eum expedita consequuntur, provident
					illum pariatur molestiae? Consequuntur odit tenetur aliquam
					distinctio laudantium. Distinctio facere sapiente neque,
					nulla perspiciatis aperiam totam exercitationem ullam?
					Earum, sequi quas consequuntur esse exercitationem quae
					obcaecati error, fuga distinctio facere nisi laudantium
					sapiente quasi quos deserunt! Exercitationem, harum?
				</p>
			</div>
		</div>
	);
};

export default BlogPost;
