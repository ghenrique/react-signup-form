import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';
import CustomButton from '../../components/General/CustomButton/CustomButton';
import CustomCard from '../../components/DataDisplay/CustomCard/CustomCard';

class Confirmation extends Component {
    state = {
        signUpReducer: {}
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
                    text += interests[index]
                } else if (interestsLength === index + 1) {
                    text += ' e ' + interests[index]
                } else {
                    text += interests[index] + ', '
                }
            })
        }

        return text;
    }

    render() {
        console.log(this.state.signUpReducer === null);

        return (
            <section className="confirmation">
                <Container>
                    {/* Checking if the state is empty */}
                    { Object.keys(this.state.signUpReducer).length === 0 && this.state.signUpReducer.constructor === Object ? (
                        <CustomCard
                            className="welcome-card"
                            title="Ops. Houve um problema ):"
                        >
                            <p>O formulário precisará ser re-submetido para que as informações possam ser exibidas. Para isso, precisaremos redirecioná-lo para o formulário novamente, tudo bem?</p>

                            <CustomButton
                                linkButton
                                to="/sign-up">
                                    Ir para o formulário
                            </CustomButton>
                        </CustomCard>
                    ) : (
                        <Row>
                            <Col lg="4">
                                {/* .confirmation__profile */ }
                                    <section className="confirmation__profile">
                                        <Link to="/sign-up">Editar Perfil</Link>
                                    </section>
                                {/* \ .confirmation__profile */}
                            </Col>

                            <Col lg="8">
                                <p>
                                    Eu sou o {this.state.signUpReducer.name} {this.state.signUpReducer.lastname && this.state.signUpReducer.lastname}, eu tenho {this.resolveAge(this.state.signUpReducer.age)} e você pode enviar e-mails para {this.state.signUpReducer.email}. Eu moro no estado do {this.state.signUpReducer.state}. Eu gosto de {this.resolveInterests(this.state.signUpReducer.interests)}. {this.state.signUpReducer.receiveNews && ' Por favor me envie newsletters.'} Para me contatar ligue no telefone {this.state.signUpReducer.phone}.
                                </p>
                            </Col>
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