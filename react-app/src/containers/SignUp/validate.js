const validate = values => {
    const errors = {}

    /* Name Validation */
    if (!values.name) {
        errors.name = 'Campo Obrigatório';
        // eslint-disable-next-line
    } else if (!/[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/.test(values.name)) {
        errors.name = 'Nome inválido. São permitidos apenas caracteres alfabéticos.'
    } else if (values.name.length > 20) {
        errors.name = 'O tamanho do valor digitado ultrapassou 20 caracteres.'
    }   

    /* E-mail Validation */
    if (!values.email) {
        errors.email = 'Campo Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'E-mail inválido. Por favor, digite um e-mail que contenha o formato adequado (joao.silva@teste.com)';
    }

    /* Phone Validation */
    if (!values.phone) errors.phone = 'Campo Obrigatório';

    /* Age Validation */
    if (!values.age) errors.age = 'Campo Obrigatório';

    /* State Validation */
    if (!values.state) errors.state = 'Campo Obrigatório';

    /* Country Validation */
    if (!values.country) errors.country = 'Campo Obrigatório';

    /* AddressType Validation */
    if (!values.addressType) errors.addressType = 'Campo Obrigatório';

    /* Address Validation */
    if (!values.address) errors.address = 'Campo Obrigatório';

    /* Interests Validation */
    if (!values.interests) errors.interests = 'Campo Obrigatório';

    return errors;
}

export default validate;