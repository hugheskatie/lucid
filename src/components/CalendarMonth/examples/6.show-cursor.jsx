import React from 'react';
import CalendarMonth from '../CalendarMonth';

export default React.createClass({
	componentWillMount() {
		this.fromDate = new Date();
		this.fromDate.setDate(1);
	},

	render() {
		return (
			<section style={{ maxWidth: 400 }}>

				Cursor for day selectMode:
				<CalendarMonth cursor={new Date()} />

				Cursor for range selectMode:
				<CalendarMonth
					selectMode="to"
					from={this.fromDate}
					cursor={new Date()}
				/>

			</section>
		);
	},
});
