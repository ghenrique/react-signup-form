import React, { Component } from 'react';
import { Container, } from 'reactstrap';

// Import components
import CustomButton from '../../components/General/CustomButton/CustomButton';
import CustomCard from '../../components/DataDisplay/CustomCard/CustomCard';

class Home extends Component {
	render() {
		return (
			<section className="homepage">
				<Container>
                    {/* custom-card */}
                    <CustomCard
                        className="welcome-card"
                        title="Faça seu cadastro"
                        subtitle="Caso deseje realizar seu cadastro, clique no botão abaixo para ser redirecionado para a página de cadastro."
                    >
                        <CustomButton
                            linkButton
                            to="/sign-up"
                        >
                                Cadastrar-se
                        </CustomButton>
                    </CustomCard>
                    {/* \ custom-card */}
                </Container>
			</section>
		);
	}
}

export default Home;