import React from 'react';
import { SplitVertical } from '../../../index';

export default React.createClass({
	getInitialState() {
		return {
			isExpanded: true,
		};
	},

	handleToggle() {
		this.setState({ isExpanded: !this.state.isExpanded });
	},
	render() {
		return (
			<section>

				<button onClick={this.handleToggle}>toggle</button>

				<SplitVertical isExpanded={this.state.isExpanded}>
					<SplitVertical.LeftPane width={250}>
						<p>
							Magna non tacos, et raw denim food truck mixtape semiotics forage. Meggings sartorial you probably haven't heard of them freegan chicharrones. Cronut affogato consequat fugiat. Portland shabby chic four loko blue bottle, tacos lomo veniam banh mi nulla. Proident sed sartorial, sint biodiesel duis seitan aute thundercats sustainable retro trust fund ugh. Man bun pariatur cray knausgaard elit waistcoat. Consequat yr 3 wolf moon kickstarter, fugiat chambray excepteur godard trust fund food truck anim small batch artisan pork belly.
						</p>
					</SplitVertical.LeftPane>
					<SplitVertical.RightPane isPrimary>
						<p>
							Vero chia occupy butcher heirloom, ad everyday carry id selvage direct trade keytar brunch consequat lumbersexual skateboard. Meditation tousled craft beer consectetur chambray, knausgaard laboris nisi twee +1 shoreditch mollit. Health goth viral mumblecore fingerstache, jean shorts cronut celiac tote bag squid. Hoodie deserunt quinoa, tacos small batch odio chicharrones gluten-free plaid migas schlitz sartorial cillum. DIY chartreuse 90's, letterpress banh mi tousled farm-to-table kogi incididunt paleo wayfarers forage. Asymmetrical aesthetic tempor before they sold out, kombucha lo-fi minim intelligentsia migas yuccie chartreuse roof party. Nulla skateboard proident sapiente qui.
						</p>
					</SplitVertical.RightPane>
				</SplitVertical>

			</section>
		);
	},
});
