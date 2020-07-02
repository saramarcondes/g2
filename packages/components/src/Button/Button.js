import { BaseView } from '@g2/css';
import { connect } from '@g2/provider';
import React from 'react';

function Button({ forwardedRef, ...props }) {
	return <BaseView {...props} ref={forwardedRef} />;
}

export default connect(Button);
