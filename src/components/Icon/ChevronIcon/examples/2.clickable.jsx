import React from 'react';
import { ChevronIcon } from '../../../../index';

export default React.createClass({
	render() {
		return (
			<div>
				<div>
					<ChevronIcon isClickable />
				</div>
				<div>
					<ChevronIcon isClickable direction="up" />
					<ChevronIcon isClickable direction="down" />
					<ChevronIcon isClickable direction="left" />
					<ChevronIcon isClickable direction="right" />
				</div>
				<div>
					<ChevronIcon isClickable direction="up" isBadge />
					<ChevronIcon isClickable direction="down" isBadge />
					<ChevronIcon isClickable direction="left" isBadge />
					<ChevronIcon isClickable direction="right" isBadge />
				</div>
			</div>
		);
	},
});
