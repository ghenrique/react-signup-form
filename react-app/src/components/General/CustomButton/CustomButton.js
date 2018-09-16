/**
 * Button Component
 * 
 * This is a component that renders a button with custom properties, and already
 * receiving the colors for button style-types (primary, secondary, warning, danger, etc).
 * 
 * Default Properties:
 * - name: Receives the name of the button, if necessary.
 * - type: Receives the button type (submit, reset, etc). The default state is 'button'.
 * - onClick: Receives the function that needs to be executed on button click.
 * - onFocus: Receives the function that needs to be executed when button is focused.
 * - className: Receives a custom className, if necessary.
 * - styleType: Receives the visual styleType that the button will assume. The default state is 'primary'.
 * 	 The possible styleTypes for the button are:
 * 		. primary;
 * 		. secondary;
 * 		. success
 * 		. warning;
 * 		. danger;
 * 		. info;
 */

/**
 * Component Usage
 * 
 * <CustomButton
 * 	 name="my-button"
 * 	 type="submit"
 *   onClick={() => this.buttonClick()}
 * 	 onFocus={this.buttonFocus()}
 * 	 className="custom-button">
 * 	 My Button
 * </CustomButton>
 * 
 * If the component should render as a LinkButton, please import it this way:
 * <CustomButton
 * 	 name="my-button"
 *   onClick={() => this.buttonClick()}
 * 	 onFocus={this.buttonFocus()}
 * 	 className="my-link-button"
 * 	 styleType="secondary"
 * 	 linkButton
 * 	 to="/sign-up">
 * 	 Sign Up Here
 * </CustomButton>
 * 
 */

import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CustomButton extends Component {
	render() {
		const { styleType, linkButton, className, children, ...rest } = this.props;

		return (
			<Fragment>
				{ linkButton ? (
					<Link
						{...rest}
						type=""
						className={`btn btn-${styleType} ${className}`}>
						{ children }
					</Link>
				) : (
					<Button
						{...rest}
						color={styleType}
					>
						{ children }
					</Button>
				)}
			</Fragment>
		);
	}
}

CustomButton.defaultProps = {
	type: 'button',
	styleType: 'primary'
}

CustomButton.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
	onFocus: PropTypes.func,
	className: PropTypes.string,
	styleType: PropTypes.string,
	linkButton: PropTypes.bool,
	to: PropTypes.string,
}

export default CustomButton;