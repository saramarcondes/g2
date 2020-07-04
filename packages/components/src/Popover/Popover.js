import { connect } from '@g2/provider';
import React from 'react';
import { usePopoverState } from 'reakit/Popover';

import { PopoverContext } from './Popover.utils';

function Popover({
	animated = true,
	animationDuration = 160,
	children,
	modal = true,
	placement,
	visible,
	...props
}) {
	const popover = usePopoverState({
		animated: animated ? animationDuration : undefined,
		modal,
		placement,
		visible,
		...props,
	});
	const contextValue = {
		popover,
	};
	return (
		<PopoverContext.Provider value={contextValue}>
			{children}
		</PopoverContext.Provider>
	);
}

export default connect(Popover);