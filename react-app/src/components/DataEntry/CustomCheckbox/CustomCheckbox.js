/**
 * Checkbox Component
 * 
 * This is a component that renders a checkbox with custom properties, containing the
 * ReduxForm needed props and can already receive a label.
 * 
 * Default Properties:
 * - name: Receives the name of the input.
 * - className: Receives a custom className, if necessary.
 * - content: Receives the text content of the input, that will be placed besides the checkbox
 */

/**
 * Component Usage
 * 
 * <Field
 *      name="name"
 *      component={CustomCheckbox}
 *      content="Desejo receber as notícias por e-mail" />
 */

import React, { Component, Fragment } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

class CustomCheckbox extends Component {
    render() {
        const { className, content, input, meta: { touched, error }, ...rest } = this.props;

        return (
            <Fragment>
                <Input
                    {...input}
                    {...rest}
                    type="checkbox"
                    className={`${className} ${touched && error && 'has-error'}`}
                />

                {content}

                {touched && error && <p className="input-error">{error}</p>}
            </Fragment>
        );
    }
}

CustomCheckbox.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    content: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    className: PropTypes.string,
}

export default CustomCheckbox;