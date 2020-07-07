import { css, styled } from '@g2/css';

import { FlexItem } from '../Flex';

const controlGroupStyles = ({ isFirst, isOnly }) => {
	if (isFirst || isOnly) return '';
	return css`
		margin-left: -1px;
	`;
};
export const ControlGroupItemView = styled(FlexItem)`
	${controlGroupStyles};
`;