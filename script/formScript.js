let emailInput = document.getElementById('email');
let telInput = document.getElementById('telephone');
let nameInput = document.getElementById('name');
let surnameInput = document.getElementById('surname');
let cpfInput = document.getElementById('cpf');
let passwordInput = document.getElementById('password');

function validateRegister() {
    if (!validateName() || !validateSurname() || !validateMail() || !validateTelephone() || !validateCpf() || !validatePassword()) {
        return;
    }

    else{
        printData();

    }
    
}

function validateName()
{
    let name = nameInput.value;

    if(name === "")
    {
        alert("Nome vazio");
        return false;
    }
    else if(validateNumbers(name) === true)
    {
        alert("Nome possui números");
        return false;
    }
    else if(validateCaracters(name) === true)
    {
        alert("Nome possui caracteres inválidos");
        return false;
    }
    else{
        localStorage.setItem("name", name);
        return true;
    }
}

function validateSurname()
{
    let surname = surnameInput.value;

    if(surname === "")
    {
        alert("Sobrenome vazio");
        return false;
    }
    else if(validateNumbers(surname) === true)
    {
        alert("Sobrenome possui números");
        return false;
    }
    else if(validateCaracters(surname) === true)
    {
        alert("Sobrenome possui caracteres inválidos");
        return false;
    }
    else{
        localStorage.setItem("surname", surname);
        return true;
    }
}

function validateMail()
{
    let email = emailInput.value.trim();
   
    if(email === ""){
        alert("O Campo de E-mail está vazio");
        return false;
    }
    else if(validateCaracters(email) === false)
    {
        alert("E-mail com caracteres indevidos");
        return false;
    }
    else{
        localStorage.setItem("email", email);
        return true;
    }

}

function validateTelephone()
{
    let telephone = telInput.value;

    if(validateNumbers(telephone) === true){
        alert("É permitido somente números no telefone");
        return false;
    }

    else if(telephone === "")
    {
        alert("Preencha o telefone");
        return false;
    }

    else{
        localStorage.setItem("telephone", telephone);
        return true;
    }
}

function validateCpf()
{
    let cpf = cpfInput.value;

    if(cpf === "")
    {
        alert("CPF vazio");
        return false;
    }

    else{
        localStorage.setItem("cpf", cpf);
        return true;
    }
}

function validatePassword()
{
    let password = passwordInput.value;

    if(password.length <= 7)
    {
        alert("A senha deve ter no mínimo 8 caracteres");
        return false;
    }
    else{
        localStorage.setItem("password", password);
        return true;
    }
}

function validateNumbers(string) {

    return /^[0-9]+$/.test(string);
}

function validateCaracters(email){
    let invalidCaracters = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return invalidCaracters.test(email);
}

function formatCPF() {

    const maxChars = 11;

    let cpf = cpfInput.value;
    
    cpf = cpf.replace(/\D/g, '');
    
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');


    cpfInput.value = cpf;
}

cpfInput.addEventListener('input', formatCPF);

function formatTelephone() {
    let telephone = telInput.value;

    telephone = telephone.replace (/\D/g, '');

    telephone = telephone.replace (/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');

    telInput.value = telephone;
}

telInput.addEventListener('input', formatTelephone);


function printData() {

    let localName = localStorage.getItem("name");
    let localSurname = localStorage.getItem("surname");
    let localMail = localStorage.getItem("email");
    let localTel = localStorage.getItem("telephone");
    let localCpf = localStorage.getItem("cpf");
    let localPassword = localStorage.getItem("password");

    let message = "Nome: " + localName + "\n";
    message += "Sobrenome: " + localSurname + "\n";
    message += "Email: " + localMail + "\n";
    message += "Telefone: " + localTel +"\n";
    message += "CPF: "+ localCpf + "\n";
    message += "Senha: "+ localPassword + "\n";

    alert(message);
}