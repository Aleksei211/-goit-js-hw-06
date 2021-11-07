const validationInput = document.querySelector('#validation-input')
const dataLehgth = validationInput.getAttribute('data-length');

const validation = event => {
    validationInput.classList.add('invalid')
    if(event.target.value.length === Number(dataLehgth)){
        validationInput.classList.replace('invalid', 'valid')
    }
}

validationInput.addEventListener('blur', validation)

