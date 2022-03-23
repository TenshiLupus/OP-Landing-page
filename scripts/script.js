function User(name, id){
    this.name = name;
    this.id = id;
    this.sayName = function(){
        console.log(name);
        console.log(id);
    }
}


document.addEventListener('blur', function(event){
    const isValid = event.target.validity.valid;
    const message = event.target.validationMessage;
    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;

    if (connectedValidation && message && !isValid){
        connectedValidation.innerText = message;
    } else {
        connectedValidation = '';
    }


}, true);