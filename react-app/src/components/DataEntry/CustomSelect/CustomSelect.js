/**
 * Select Component
 * 
 * This is a component that renders a select with custom properties, and 
 * rendering its options based on the data property that is passed to the component.
 * 
 * Default Properties:
 * - name: Receives the name of the select, if necessary.
 * - data: Receives the content that will be rendered to the select component.
 *   The data JSON should be in the below format:
 *   [
 *      { value: "pr", content="Paraná" },
 *      { value: "sp", content="São Paulo" },
 *   ]
 */

/**
 * Component Usage
 * 
 * <CustomSelect
 *      name="state"
 *      id="signup-state"
 *      data={state.location.states} />
 */

import React, { Component, Fragment } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

class CustomSelect extends Component {
    /**
     * Render Select Options
     * 
     * Receive the options data fomatted by props and render the
     * options based on the data passed to the component.
     */
    renderSelectOptions = (data) => {
        return data.map((item, index) => {
            return (
                <option key={index} value={item.value}>{item.value}</option>
            );
        });
    }

    handleOnKeyPress = event => {
        if (event.key === 'Enter') event.preventDefault();
    }

    render() {
        const { className, type, data, input, meta: { touched, error }, onKeyPress, ...rest } = this.props;

        return (
            <Fragment>
                <Input
                    {...input}
                    {...rest}
                    type="select"
                    className={`${className} ${touched && error && 'has-error'}`}
                    onKeyPress={e => this.handleOnKeyPress(e)}>
                    <option>Selecione</option>
                    {this.renderSelectOptions(data)}
                </Input>

                {touched && error && <p className="input-error">{error}</p>}
            </Fragment>
        );
    }
}

CustomSelect.propTypes = {
    name: PropTypes.string,
    data: PropTypes.array,
    onClick: PropTypes.func,
    onKeyPress: PropTypes.func,
    onFocus: PropTypes.func,
    className: PropTypes.string,
}

export default CustomSelect;