// ======================================================
// FORM CONTATO
// ======================================================

const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('txtMensagem');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checarInputs();
});

function checarInputs() {
    // valores dos inputs
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const assuntoValue = assunto.value.trim();
    const mensagemValue = mensagem.value.trim();


    if (nomeValue === '') {
        defineErro(nome, 'Nome não pode estar em branco');
    } else {
        defineSucesso(nome);
    }


    if (emailValue === '') {
        // mostrar erro
        // add class erro
        defineErro(email, 'Email não pode estar em branco');
    } else if (!isEmail(emailValue)) {
        // validação
        defineErro(email, 'E-mail inválido');
    } else {
        // add success class
        defineSucesso(email);
    }


    if (assuntoValue === '') {
        defineErro(assunto, 'Assunto não pode estar em branco');
    } else {
        defineSucesso(assunto);
    }


    if (mensagemValue === '') {
        defineErro(mensagem, 'Mensagem não pode estar em branco');
    } else {
        defineSucesso(mensagem);
    }


    // mostrar a mensagem de sucesso //
    const msg = document.querySelector('.msg-contato');

    if((nome.parentElement.className == 'form-control success') &&
    (email.parentElement.className == 'form-control success') &&
    (assunto.parentElement.className == 'form-control success') &&
    (mensagem.parentElement.className == 'form-control success')) {
        
        msg.innerHTML = `Mensagem enviada!`
        msg.style.display = 'flex'
        msg.style.justifyContent = 'center'
        msg.style.paddingTop = '20px'
    } else {
        msg.style.display = 'none'
    }
}

function defineErro(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    // add mensagem de erro no small
    small.innerText = message;
    // add class erro
    formControl.className = 'form-control error';
}

function defineSucesso(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    // regex
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
