import React from 'react';
import { Grid } from '../../../index';

const gridStyle = {
	half: { background: '#0089c4' },
	quarter: { background: '#f7403a' },
	third: { background: '#3fa516', color: '#f3f3f3' },
	full: { background: '#333333', color: '#f3f3f3' },
	auto: { background: '#999999', color: '#f3f3f3' },
	flexdefault: { background: '#feb209' },
	sharedStyles: {
		margin: 0,
		padding: 0,
		color: '#f3f3f3',
	},
	vertical: { height: '100px' },
};

export default React.createClass({
	render() {
		return (
			<Grid isHorizontal isMultiline>
				<Grid.Cell isHalf>
					<p style={{ ...gridStyle.half, ...gridStyle.sharedStyles }}>half</p>
				</Grid.Cell>
				<Grid.Cell isHalf>
					<p style={{ ...gridStyle.half, ...gridStyle.sharedStyles }}>half</p>
				</Grid.Cell>
				<Grid.Cell isHalf>
					<p style={{ ...gridStyle.half, ...gridStyle.sharedStyles }}>half</p>
				</Grid.Cell>
				<Grid.Cell isFull>
					<p style={{ ...gridStyle.full, ...gridStyle.sharedStyles }}>full</p>
				</Grid.Cell>
				<Grid.Cell isThird>
					<p style={{ ...gridStyle.third, ...gridStyle.sharedStyles }}>third</p>
				</Grid.Cell>
				<Grid.Cell isThird>
					<p style={{ ...gridStyle.third, ...gridStyle.sharedStyles }}>third</p>
				</Grid.Cell>
				<Grid.Cell isThird>
					<p style={{ ...gridStyle.third, ...gridStyle.sharedStyles }}>third</p>
				</Grid.Cell>
				<Grid.Cell isThird>
					<p style={{ ...gridStyle.third, ...gridStyle.sharedStyles }}>third</p>
				</Grid.Cell>
				<Grid.Cell isQuarter>
					<p style={{ ...gridStyle.quarter, ...gridStyle.sharedStyles }}>
						quarter
					</p>
				</Grid.Cell>
				<Grid.Cell isQuarter>
					<p style={{ ...gridStyle.quarter, ...gridStyle.sharedStyles }}>
						quarter
					</p>
				</Grid.Cell>
				<Grid.Cell isQuarter>
					<p style={{ ...gridStyle.quarter, ...gridStyle.sharedStyles }}>
						quarter
					</p>
				</Grid.Cell>
			</Grid>
		);
	},
});
