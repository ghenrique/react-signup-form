import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Container,
    Row,
    Col,
    FormGroup,
    Label,
} from 'reactstrap';

// Form
import { Form, Field, FieldArray, reduxForm } from 'redux-form';

import validate from './validate';

// Components
import CustomInput from '../../components/DataEntry/CustomInput/CustomInput';
import CustomSelect from '../../components/DataEntry/CustomSelect/CustomSelect';
import CustomCheckbox from '../../components/DataEntry/CustomCheckbox/CustomCheckbox';
import CustomSlider from '../../components/DataEntry/CustomSlider/CustomSlider';
import CustomMultiselect from '../../components/DataEntry/CustomMultiselect/CustomMultiselect';
import UploadFile from '../../components/DataEntry/UploadFile/UploadFile';
import CustomButton from '../../components/General/CustomButton/CustomButton';

const INITIAL_STATE = {
    location: {
        states: [
            { value: 'Acre'},
            { value: 'Alagoas'},
            { value: 'Amapá'},
            { value: 'Amazonas'},
            { value: 'Bahia'},
            { value: 'Ceará'},
            { value: 'Distrito Federal'},
            { value: 'Espírito Santo'},
            { value: 'Goiás'},
            { value: 'Maranhão'},
            { value: 'Mato Grosso'},
            { value: 'Mato Grosso do Sul'},
            { value: 'Minas Gerais'},
            { value: 'Pará'},
            { value: 'Paraíba'},
            { value: 'Paraná'},
            { value: 'Pernambuco'},
            { value: 'Piauí'},
            { value: 'Rio de Janeiro'},
            { value: 'Rio Grande do Norte'},
            { value: 'Rio Grande do Sul'},
            { value: 'Rondônia'},
            { value: 'Roraima'},
            { value: 'Santa Catarina'},
            { value: 'São Paulo'},
            { value: 'Sergipe'},
            { value: 'Tocantins'}
        ],
        countries: [
            { value: 'Brasil' }
        ],
        addressTypes: [
            { value: 'Casa' },
            { value: 'Empresa' }
        ]
    },
    behaviors: {
        showAddressField: false
    },
    sliderMarks: {
        0: '13-19',
        25: '20-29',
        50: '30-39',
        75: '40-49',
        100: '50 e acima'
    } 
}

class SignUp extends Component {
    state = INITIAL_STATE;

    handleAddressType = (addressType) => {
        if (addressType !== 'Selecione') {
            this.setState({
                behaviors: {
                    ...this.state.behaviors,
                    showAddressField: true
                }
            });
        } else {
            this.setState({
                behaviors: {
                    ...this.state.behaviors,
                    showAddressField: false
                }
            });
        }
    }

    handleSubmit = values => {
        console.log(values)

        this.props.history.push('/confirmation');  
    }

    render() {
        const { state, props } = this;

        return (
            <section className="sign-up">
                <Container>
                    <Form onSubmit={props.handleSubmit(this.handleSubmit)}>
                        <Row>
                            <Col lg="4">
                                <UploadFile
                                    name="picture"
                                    id="profile-pic"
                                    label="Carregue sua Foto"
                                />
                            </Col>

                            <Col lg={{ size: 7, offset: 1 }}>
                                <FormGroup row>
                                    <Label xs="12">Nome</Label>

                                    <Col md="6">
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="João"
                                            component={CustomInput}
                                        />
                                    </Col>

                                    <Col md="6">
                                        <Field
                                            name="lastname"
                                            type="text"
                                            placeholder="da Silva"
                                            component={CustomInput}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="signup-age">Idade</Label>
                                    <Field
                                        name="age"
                                        id="signup-age"
                                        marks={state.sliderMarks}
                                        step={25}
                                        included={false}
                                        defaultValue={0}
                                        component={CustomSlider}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="signup-email">E-mail</Label>
                                    <Field
                                        name="email"
                                        type="email"
                                        id="signup-email"
                                        placeholder="joao.dasilva@email.com.br"
                                        component={CustomInput}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="signup-phone">Telefone</Label>
                                    <Field
                                        name="phone"
                                        type="tel"
                                        placeholder="(XX) XXXXX-XXXX"
                                        component={CustomInput}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="signup-state">Estado</Label>
                                    <Field
                                        name="state"
                                        id="signup-state"
                                        data={state.location.states}
                                        component={CustomSelect}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="signup-country">País</Label>
                                    <Field
                                        name="country"
                                        id="signup-country"
                                        data={state.location.countries}
                                        component={CustomSelect}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="signup-phone">Endereço</Label>
                                    <Field
                                        name="addressType"
                                        id="signup-addressType"
                                        data={state.location.addressTypes}
                                        onChange={(e) => this.handleAddressType(e.target.value)}
                                        component={CustomSelect}
                                    />

                                    {state.behaviors.showAddressField &&
                                        <Field
                                            name="address"
                                            type="text"
                                            id="signup-address"
                                            placeholder="Rua Batatinhas, 480"
                                            component={CustomInput}
                                        />
                                    }
                                </FormGroup>

                                <FormGroup>
                                    <Label for="signup-interests">Interesses</Label>
                                    <FieldArray
                                        name="interests"
                                        id="signup-interests"
                                        placeholder="Digite o os interesses e pressione enter ao digitar cada um deles."
                                        component={CustomMultiselect}
                                    />
                                </FormGroup>

                                <FormGroup row>
                                    <Col sm={{ size: 10 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Field
                                                    name="receiveNews"
                                                    type="checkbox"
                                                    id="receive-news"
                                                    component={CustomCheckbox}
                                                />
                                                
                                                Desejo receber novidades por e-mail.
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                                <CustomButton
                                    type="submit"                           
                                    name="submitButton"
                                >
                                    Salvar
                                </CustomButton>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </section>
        );
    }
}

SignUp = reduxForm({
    form: 'signUpForm',
    validate,
    destroyOnUnmount: false
})(SignUp)

export default connect(null)(SignUp);