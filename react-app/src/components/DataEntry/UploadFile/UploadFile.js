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

import { connect } from 'react-redux';
import { change } from 'redux-form';

class UploadFile extends Component {
    state = {
        fileName: '',
        base64: ''
    }
    
    handleChange = (files) => {
        /**
         * Reconize the file, convert it to base64 and set the fileName
         */
        if (files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0])

            reader.onload = () => {
                // Sending the image to the form reducer
                this.props.dispatch(change('signUpForm', 'profileImg', reader.result))
            }

            this.setState({
                fileName: files[0].name
            });
        }
    }

    render() {
        const { type, id, label, onChange, dispatch, linkLabel, hideImgName, ...rest } = this.props;

        return (
            <div className={`upload-file ${linkLabel ? 'upload-file--link' : ''}`}>
                <Input
                    {...rest}
                    id={id}
                    onChange={(e) => {this.handleChange(e.target.files)}}
                    type="file"
                />
                <Label for={id}>{label}</Label>

                {this.state.fileName && !hideImgName &&
                    <div className="file-info">
                        <p>Foto selecionada: {this.state.fileName}</p>
                    </div>
                }
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

export default connect(null)(UploadFile);