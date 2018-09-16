/**
 * Range Slider Component
 * 
 * This is a component that renders a range slider with custom properties, containing the
 * ReduxForm needed props.
 * 
 * Default Properties:
 * - className: Receives a custom className, if necessary.
 * - marks: Receives the object with the marker positions.
 * - step: Receives the quantity the dot will walk on its change.
 * - included: Receives a bool value that will set the bar color filling to true or false.
 * - defaultValue: Receives the initialValue of the marker.
 */

/**
 * Component Usage
 * 
 * <Field
 *    name="age"
 *    marks={state.sliderMarks}
 *    step={25}
 *    included={false}
 *    defaultValue={0}
 *    component={Slider} />
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Slider from 'rc-slider';

class CustomSlider extends Component {
    render() {
        const { className, input, meta: { touched, error }, ...rest } = this.props;

        return (
            <Fragment>
                <Slider
                    {...input}
                    {...rest}
                    className={`${className} ${touched && error && 'has-error'}`}
                />

                {touched && error && <p className="input-error">{error}</p>}
            </Fragment>
        );
    }
}

CustomSlider.propTypes = {
    marks: PropTypes.object,
    step: PropTypes.number,
    included: PropTypes.bool,
    defaultValue: PropTypes.number,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    className: PropTypes.string,
}

export default CustomSlider;