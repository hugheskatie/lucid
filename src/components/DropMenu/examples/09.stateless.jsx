import React from 'react';
import { Button, DropMenuDumb as DropMenu } from '../../../index';

const { Control, Option, OptionGroup } = DropMenu;

export default React.createClass({
	render() {
		return (
			<DropMenu
				selectedIndices={[0]}
				focusedIndex={3}
				isExpanded
				direction="down"
			>
				<Control>
					<Button>Select Color</Button>
				</Control>

				<OptionGroup>
					Preferred
					<Option>Red</Option>
					<Option>Green</Option>
					<Option>Blue</Option>
				</OptionGroup>

				<Option>Orange</Option>
				<Option isDisabled>Violet</Option>
				<Option isDisabled>Brown</Option>
			</DropMenu>
		);
	},
});
