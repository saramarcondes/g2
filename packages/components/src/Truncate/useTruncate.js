import { useContextSystem } from '@wp-g2/context';
import { css, cx } from '@wp-g2/styles';
import { useMemo } from 'react';

import * as styles from './Truncate.styles';
import {
	TRUNCATE_ELLIPSIS,
	TRUNCATE_TYPE,
	truncateContent,
} from './Truncate.utils';

export function useTruncate(props) {
	const {
		className,
		children,
		ellipsis = TRUNCATE_ELLIPSIS,
		ellipsizeMode = TRUNCATE_TYPE.auto,
		limit = 0,
		numberOfLines = 0,
		...otherProps
	} = useContextSystem(props, 'Truncate');

	const truncatedContent = truncateContent(children, {
		ellipsis,
		ellipsizeMode,
		limit,
	});

	const shouldTruncate =
		ellipsizeMode === TRUNCATE_TYPE.auto &&
		ellipsizeMode !== TRUNCATE_TYPE.none;

	const classes = useMemo(() => {
		const sx = {};

		sx.numberOfLines = css`
			-webkit-box-orient: vertical;
			-webkit-line-clamp: ${numberOfLines};
			display: -webkit-box;
			overflow: hidden;
		`;

		return cx(
			shouldTruncate && !numberOfLines && styles.Truncate,
			shouldTruncate && numberOfLines && sx.numberOfLines,
			className,
		);
	}, [className, numberOfLines, shouldTruncate]);

	return { ...otherProps, className: classes, children: truncatedContent };
}
