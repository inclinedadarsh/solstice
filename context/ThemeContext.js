/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import { ThemeProvider } from 'next-themes';

const Providers = ({ children }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			{children}
		</ThemeProvider>
	);
};

export default Providers;
