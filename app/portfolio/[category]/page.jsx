import Image from 'next/image';
import CustomButton from '@/components/CustomButton';

const Category = ({ params }) => {
	return (
		<div className="">
			<p className="capitalize text-2xl font-semibold">
				{params.category}
			</p>
			<div className="">
				<div className="flex gap-5 flex-col md:flex-row items-center mt-10">
					<div className="flex-1 flex gap-6 flex-col">
						<h2 className="text-3xl md:text-4xl font-bold">
							The title here
						</h2>
						<p className="text-secondary-text--dark">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Explicabo praesentium deleniti ea,
							necessitatibus veniam corporis aspernatur, assumenda
							odio accusamus aliquid earum saepe. Soluta odit
							consectetur at et asperiores error accusamus vel
							vitae, qui possimus. Aliquam facere est laboriosam
							enim minima tempore sit provident praesentium
							corrupti, maiores suscipit nobis cupiditate eum?
						</p>
						<CustomButton text="See more" type="primary" url="/" />
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
				<div className="flex gap-5 flex-col md:flex-row-reverse items-center mt-10">
					<div className="flex-1 flex gap-6 flex-col">
						<h2 className="text-3xl md:text-4xl font-bold">
							The title here
						</h2>
						<p className="text-secondary-text--dark">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Explicabo praesentium deleniti ea,
							necessitatibus veniam corporis aspernatur, assumenda
							odio accusamus aliquid earum saepe. Soluta odit
							consectetur at et asperiores error accusamus vel
							vitae, qui possimus. Aliquam facere est laboriosam
							enim minima tempore sit provident praesentium
							corrupti, maiores suscipit nobis cupiditate eum?
						</p>
						<CustomButton text="See more" type="primary" url="/" />
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
				<div className="flex gap-5 flex-col md:flex-row items-center mt-10">
					<div className="flex-1 flex gap-6 flex-col">
						<h2 className="text-3xl md:text-4xl font-bold">
							The title here
						</h2>
						<p className="text-secondary-text--dark">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Explicabo praesentium deleniti ea,
							necessitatibus veniam corporis aspernatur, assumenda
							odio accusamus aliquid earum saepe. Soluta odit
							consectetur at et asperiores error accusamus vel
							vitae, qui possimus. Aliquam facere est laboriosam
							enim minima tempore sit provident praesentium
							corrupti, maiores suscipit nobis cupiditate eum?
						</p>
						<CustomButton text="See more" type="primary" url="/" />
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
			</div>
		</div>
	);
};

export default Category;
