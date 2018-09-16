/**
 * Multiselect Component
 * 
 * This is a component that renders a multiselect input, that will create tags
 * with the values typed and separated by comma.
 * 
 * Default Properties:
 * - name: receives the name of the input.
 * - id: Receives the input id and will be the label "for". This prop is required.
 * - label: Receives the label that will be shown in the custom file upload.
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
import { Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

class UploadFile extends Component {
    handleChange = (files) => {
        console.log(files[0].name)
    }

    render() {
        const { type, id, label, onChange, ...rest } = this.props;

        return (
            <div className="upload-file">
                <Input
                    {...rest}
                    id={id}
                    onChange={(e) => {this.handleChange(e.target.files)}}
                    type="file"
                />
                <Label for={id}>{label}</Label>
            </div>
        );
    }
}

UploadFile.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
}

export default UploadFile;