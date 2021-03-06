import React from 'react';
import { ChevronIcon } from '../../../../index';

export default React.createClass({
	render() {
		return (
			<div>
				<div>
					<ChevronIcon isDisabled />
				</div>
				<div>
					<ChevronIcon isDisabled direction="up" />
					<ChevronIcon isDisabled direction="down" />
					<ChevronIcon isDisabled direction="left" />
					<ChevronIcon isDisabled direction="right" />
				</div>
				<div>
					<ChevronIcon isDisabled direction="up" isBadge />
					<ChevronIcon isDisabled direction="down" isBadge />
					<ChevronIcon isDisabled direction="left" isBadge />
					<ChevronIcon isDisabled direction="right" isBadge />
				</div>
			</div>
		);
	},
});
