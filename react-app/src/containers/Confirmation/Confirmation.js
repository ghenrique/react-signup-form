import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

// Components
import CustomCard from '../../components/DataDisplay/CustomCard/CustomCard';
import UploadFile from '../../components/DataEntry/UploadFile/UploadFile';   
import CustomButton from '../../components/General/CustomButton/CustomButton';

// Services
import ProfileService from '../../services/profile';

class Confirmation extends Component {
    state = {
        signUpReducer: {},
        isLoading: false,
        errors: {
            submitError: false,
            message: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.signUpReducer !== prevProps.signUpReducer) {
            this.setState({
                signUpReducer: this.props.signUpReducer.values
            });
        }
    }

    /**
     * resolveAge
     * 
     * Gets the range that the slider returned and resolve into the
     * ages text.
     */
    resolveAge = age => {
        switch (age) {
            case 0:
                return 'mais de 13 anos'
            case 25:
                return 'mais de 20 anos'
            case 50:
                return 'mais de 30 anos'
            case 75:
                return 'mais de 40 anos'
            case 100:
                return 'mais de 50 anos'
            default:
                break;
        }
    }

    /**
     * resolveInterests
     * 
     * Receives the array of interests and transform it to a displayable text.
     */
    resolveInterests = interests => {
        let text = '';

        if (interests) {
            const interestsLength = interests.length;

            // This forEach identifies which iteration is to apply the correct text to format the return.
            interests.forEach((item, index) => {
                if (interestsLength === index + 2) {
                    text += interests[index] + ' e '
                } else if (interestsLength === index + 1) {
                    text += interests[index]
                } else {
                    text += interests[index] + ', '
                }
            })
        }

        return text;
    }

    /**
     * submitData
     * 
     * Will send the data object to api and proceed the request.
     */
    submitData = async () => {
        // Setting the object that will be sent on request
        const data = this.state.signUpReducer;

        try {
            this.setState({
                isLoading: true
            });

            // Waiting for the post to be executed
            await ProfileService.postProfile(data);

            // Resetting errors
            this.setState({
                isLoading: false,
                errors: {
                    ...this.state.errors,
                    submitError: false,
                    message: ''
                }
            });

            this.props.history.push('/success');
        } catch (e) {
            // Treating error
            this.setState({
                isLoading: false,
                errors: {
                    ...this.state.errors,
                    submitError: true,
                    message: 'Houve um problema ao enviar os dados. Tente novamente mais tarde.'
                }
            })
        }
    }

    render() {
        const { state } = this;

        return (
            <section className="confirmation">
                <Container>
                    {/* Checking if the state is empty */}
                    { Object.keys(state.signUpReducer).length === 0 && state.signUpReducer.constructor === Object ? (
                        <CustomCard
                            className="welcome-card"
                            title="Ops. Houve um problema ):"
                        >
                            <p>O formulário precisará ser re-submetido para que as informações possam ser exibidas. Para isso, precisaremos redirecioná-lo para o formulário novamente, tudo bem?</p>

                            <CustomButton
                                linkButton
                                to="/sign-up"
                            >
                                Ir para o formulário
                            </CustomButton>
                        </CustomCard>
                    ) : (
                        <Row>
                            {/* Profile Image and actions */}
                            <Col lg="4">
                                {/* .confirmation__profile */ }
                                <section className="confirmation__profile">
                                    { state.signUpReducer.profileImg && 
                                        <Fragment>
                                            {/* .confirmation__profile__img */}
                                            <figure className="confirmation__profile__img">
                                                <img src={state.signUpReducer.profileImg} alt={`Imagem de perfil do ${state.signUpReducer.name}`} />
                                            </figure>
                                            {/* \ .confirmation__profile__img */}

                                            <UploadFile
                                                name="picture"
                                                id="profile-pic"
                                                accept="image/jpeg, image/png, image/jpg"
                                                label="Editar foto"
                                                linkLabel
                                                hideImgName
                                            />
                                        </Fragment>
                                    }

                                    <Link to="/sign-up">Editar Perfil</Link>
                                </section>
                                {/* \ .confirmation__profile */}
                            </Col>
                            {/* \ Profile Image and actions */}
                            
                            {/* User description and confirmation button */}
                            <Col lg="8">
                                <p>Eu sou o {state.signUpReducer.name} {state.signUpReducer.lastname && state.signUpReducer.lastname}, eu tenho {this.resolveAge(state.signUpReducer.age)} e você pode enviar e-mails para {state.signUpReducer.email}. Eu moro no estado do {state.signUpReducer.state}. Eu gosto de {this.resolveInterests(state.signUpReducer.interests)}. {state.signUpReducer.receiveNews && ' Por favor me envie newsletters.'} Para me contatar ligue no telefone {state.signUpReducer.phone}.</p>

                                <CustomButton
                                    onClick={() => this.submitData()}
                                    disabled={state.isLoading}
                                >
                                    Confirmar
                                </CustomButton>

                                { state.errors.submitError &&
                                    <p className="input-error">{ state.errors.submitError }</p>
                                }
                            </Col>
                            {/* \ User description and confirmation button */}
                        </Row>
                    )}
                </Container>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        signUpReducer: state.form.signUpForm,
    }
}

export default connect(mapStateToProps)(Confirmation);