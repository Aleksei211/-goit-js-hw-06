const form = document.querySelector('.login-form');
const userInform = {};

form.addEventListener('submit', onFormSubmit);
 
function onFormSubmit(event) {

    event.preventDefault();

   
     const {
    elements: {email, password}
  } = event.target;

    if (email.value === "" || password.value === "") {
        return alert('Achtung! Все поля должны быть заполнены!')
       
    }
    userInform.email = email.value
    userInform.password = password.value;
    console.log(userInform)
    event.target.reset()
}
