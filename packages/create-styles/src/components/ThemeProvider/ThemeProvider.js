import React, { useRef } from 'react';

import { useHydrateGlobalStyles } from '../../hooks';
import {
	useColorBlindMode,
	useDarkMode,
	useHighContrastMode,
	useReducedMotionMode,
	useThemeStyles,
} from './ThemeProvider.utils';

/**
 * @typedef ThemeProviderProps
 * @property {any} children Children to render.
 * @property {function} injectGlobal Globally injects styles on initial render (provided by an Emotion instance).
 * @property {boolean} isGlobal Determines if the theme styles are rendered globally or scoped locally.
 * @property {boolean} isDark Determines if dark-mode styles should be rendered.
 * @property {boolean} isColorBlind Determines if color-blind-mode styles should be rendered.
 * @property {boolean} isReducedMotion Determines if reduced-motion-mode styles should be rendered.
 * @property {boolean} isHighContrast Determines if high-contrast-mode styles should be rendered.
 * @property {object} theme Custom theme properties.
 */

/**
 * The ThemeProvider for the Style system. This ThemeProvider uses Emotion's
 * ThemeProvider as a foundation, but enhances it with features provided by
 * the Style system, such as dark mode, high contrast mode, etc...
 *
 * An important feature this ThemeProvider accounts for is the ability to render
 * styles either globally (at the document/html level) or scoped.
 *
 * @example
 * ```jsx
 * <ThemeProvider isGlobal theme={{...}}>
 *   <Button>...</Button>
 * </ThemeProvider>
 * ```
 *
 * @param {ThemeProviderProps} props Props for the ThemeProvider.
 * @returns {React.Component} Children content wrapped with the <ThemeProvider />.
 */
function ThemeProvider({
	children,
	injectGlobal,
	isGlobal = false,
	globalStyles,
	isDark,
	isColorBlind,
	isReducedMotion,
	isHighContrast,
	theme = {},
	...props
}) {
	/**
	 * Hydrates global styles (via injectGlobal). This is necessary as there may
	 * be a chance that <ThemeProvider /> renders before any other (styled)
	 * component. Injecting global styles early in this manner allows for
	 * the initial render of theme styles (which also uses injectGlobal)
	 * to be sequences correctly.
	 */
	useHydrateGlobalStyles({ injectGlobal, globalStyles });

	const nodeRef = useRef();
	const themeStyles = useThemeStyles({ injectGlobal, isGlobal, theme });

	useColorBlindMode({ isColorBlind, isGlobal, ref: nodeRef });
	useDarkMode({ isDark, isGlobal, ref: nodeRef });
	useHighContrastMode({ isGlobal, isHighContrast, ref: nodeRef });
	useReducedMotionMode({ isGlobal, isReducedMotion, ref: nodeRef });

	return (
		<div
			{...props}
			data-system-theme-provider
			ref={nodeRef}
			style={themeStyles}
		>
			{children}
		</div>
	);
}

export default React.memo(ThemeProvider);
