import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div
			onClick={() => {
				setTheme(theme === 'light' ? 'dark' : 'light');
			}}
			onKeyPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			role="button"
			tabIndex={0}
			className="cursor-pointer w-[46px] h-6 p-[2px] border-2 border-solid relative flex items-center text-xs leading-none border-secondary-bg dark:border-secondary-bg--dark rounded-full"
		>
			<div className="mr-auto">🌙</div>
			<div>🌞</div>
			<div
				className={`w-4 h-4 rounded-full bg-skyblue-500 absolute transition-absolute ${
					theme === 'light' ? 'left-[2px]' : 'left-[24px]'
				}`}
			/>
		</div>
	);
};

export default DarkModeToggle;
