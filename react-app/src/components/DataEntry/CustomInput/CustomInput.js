/**
 * Input Component
 * 
 * This is a component that renders a input with custom properties, and contains
 * the properties needed by ReduxForm to render error messages and states.
 * 
 * Default Properties:
 * - name: Receives the name of the input.
 * - className: Receives a custom className, if necessary.
 * - type: Receives the type of input (submit, text, tel, etc).
 */

/**
 * Component Usage
 * 
 * <Field
 *      name="name"
 *      component={CustomInput}
 *      validate={validateName} />
 */

import React, { Component } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

class CustomInput extends Component {
    handleOnKeyPress = event => {
        if (event.key === 'Enter') event.preventDefault();
    }

    render() {
        const { className, input, meta: { touched, error }, onKeyPress, ...rest } = this.props;

        return (
            <div className="custom-input">
                <Input
                    {...input}
                    {...rest}
                    onKeyPress={e => this.handleOnKeyPress(e)}
                    className={`${className} ${touched && error && 'has-error'}`}
                />

                {touched && error && <p className="input-error">{error}</p>}
            </div>
        );
    }
}

CustomInput.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    onFocus: PropTypes.func,
    className: PropTypes.string,
}

export default CustomInput;