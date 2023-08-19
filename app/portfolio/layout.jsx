const Layout = ({ children }) => {
	return (
		<div>
			<div className="my-5">
				<h1 className="md:text-4xl text-3xl font-semibold">
					Our Works
				</h1>
				<p className="dark:text-secondary-text--dark text-secondary-text--dark">
					None of this is my official, I have just added it here for
					showcase.
				</p>
			</div>
			{children}
		</div>
	);
};

export default Layout;
