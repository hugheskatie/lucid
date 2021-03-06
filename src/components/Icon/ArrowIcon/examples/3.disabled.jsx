import React from 'react';
import { ArrowIcon } from '../../../../index';

export default React.createClass({
	render() {
		return (
			<div>
				<div>
					<ArrowIcon isDisabled />
				</div>
				<div>
					<ArrowIcon isDisabled direction="up" />
					<ArrowIcon isDisabled direction="down" />
					<ArrowIcon isDisabled direction="left" />
					<ArrowIcon isDisabled direction="right" />
				</div>
				<div>
					<ArrowIcon isDisabled direction="up" isBadge />
					<ArrowIcon isDisabled direction="down" isBadge />
					<ArrowIcon isDisabled direction="left" isBadge />
					<ArrowIcon isDisabled direction="right" isBadge />
				</div>
			</div>
		);
	},
});
