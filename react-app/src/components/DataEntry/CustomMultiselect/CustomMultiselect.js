/**
 * Multiselect Component
 * 
 * This is a component that renders a multiselect input, that will create tags
 * with the values typed and separated by comma.
 */

/**
 * Component Usage
 * 
 * <Field
 *     name="interests"
 *     id="signup-interests"
 *     component={CustomMultiselect} />
 */

import React, { Component } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

class CustomMultiselect extends Component {
    state = {
        inputValue: ''
    }

    /**
     * handleTypedValues
     * 
     * Get the value typed when clicked on enter and set it to an array
     */
    handleTypedValues = event => {
        if (event.keyCode === 13 && event.target.value) {
            this.props.fields.push(event.target.value);

            this.setState({
                inputValue: ''
            });
        }
    }

    /**
     * renderSelectedItems
     * 
     * Gets the typed values array and renders the tags.
     */
    renderSelectedItems = (typedValues) => {
        return typedValues.map((item, index) => {
            return (
                <li className="custom-multiselect__tag" key={index}>
                    {typedValues.get(index)}

                    <span
                        className="custom-multiselect__tag__close"
                        onClick={() => {this.props.fields.remove(index)}}
                    >
                        x
                    </span>
                </li>
            );
        })
    }

    render() {
        const { className, fields, meta: { touched, error }, ...rest } = this.props;

        return (
            <div className="custom-multiselect">
                <Input
                    {...rest}
                    value={this.state.inputValue}
                    onChange={e => this.setState({ inputValue: e.target.value })}
                    onKeyUp={e => this.handleTypedValues(e)}
                    onKeyPress={e => { if (e.key === 'Enter') e.preventDefault() }}
                    className={`${className} ${touched && error && 'has-error'}`}
                />

                {/* .custom-multiselect__selected */}
                <ul className="custom-multiselect__selected">
                    { this.renderSelectedItems(fields) }
                </ul>
                {/* \ .custom-multiselect__selected */}

                {touched && error && <p className="input-error">{error}</p>}
            </div>
        );
    }
}

CustomMultiselect.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    className: PropTypes.string,
}

export default CustomMultiselect;