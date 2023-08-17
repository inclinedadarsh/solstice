import Link from 'next/link';

const CustomButton = ({ text, url, type, icon }) => {
	return (
		<Link
			href={url}
			type="button"
			className={`px-5 py-3 font-semibold text-sm rounded-lg flex items-center gap-2 w-fit ${
				type === 'primary'
					? 'dark:bg-skyblue-500 dark:hover:bg-skyblue-400 bg-primary-text hover:bg-secondary-bg--dark'
					: 'border-2 border-secondary-bg hover:bg-secondary-bg dark:border-secondary-bg--dark dark:hover:bg-secondary-bg--dark'
			}`}
		>
			{text}
			{icon && icon}
		</Link>
	);
};

export default CustomButton;
