import React, { Component } from 'react';
import { Container, } from 'reactstrap';

// Form
import { connect } from 'react-redux';
import { reset } from 'redux-form';

// Components
import CustomButton from '../../components/General/CustomButton/CustomButton';
import CustomCard from '../../components/DataDisplay/CustomCard/CustomCard';

class Success extends Component {

    /**
     * addNewProfile
     * 
     * Resets the reduxFormValues and send the user to the form page.
     */
    addNewProfile = () => {
        const props = this.props;

        props.dispatch(reset('signUpForm'));
        props.history.push('/sign-up');
    }

    render() {
        return (
            <section className="success">
                <Container>
                    {/* custom-card */}
                    <CustomCard
                        className="welcome-card"
                        title="Seu perfil foi adicionado com sucesso (:"
                        subtitle="Seu perfil foi adicionado com sucesso. Seja bem vindo! Para adicionar um novo perfil, clique no botão abaixo."
                    >
                        <CustomButton
                            onClick={() => this.addNewProfile()}
                        >
                            Adicionar um novo perfil
                        </CustomButton>
                    </CustomCard>
                    {/* \ custom-card */}
                </Container>
            </section>
        );
    }
}

export default connect(null)(Success);