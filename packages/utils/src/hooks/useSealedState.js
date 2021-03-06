import { useState } from 'react';

/**
 * React custom hook that returns the very first value passed to `initialState`,
 * even if it changes between re-renders.
 */
export function useSealedState(initialState) {
	const [sealed] = useState(initialState);
	return sealed;
}
