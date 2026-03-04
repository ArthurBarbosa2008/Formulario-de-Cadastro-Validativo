/* Revelar e ocultar senha */
const senha = document.getElementById('senha')
const senhaIco = document.getElementById('senha-ico')
const confirmar = document.getElementById('confirmar')
const confirmarIco = document.getElementById('confirmar-ico')

senhaIco.addEventListener('click', ()=>{
    if (senha.type == "password"){
        senha.type = "text"
        senhaIco.src = "assets/images/passwordShow-ico.png"
    } else {
        senha.type = "password"
        senhaIco.src = "assets/images/passworHide-ico.png"
    }
})

confirmarIco.addEventListener('click', ()=>{
    if (confirmar.type == "password"){
        confirmar.type = "text"
        confirmarIco.src = "assets/images/passwordShow-ico.png"
    } else {
        confirmar.type = "password"
        confirmarIco.src = "assets/images/passworHide-ico.png"
    }
})

/* Validação de cadastro */

document.querySelector('form').addEventListener('submit',function(ev){
    valid = true

    /* usuário */
    const username = document.getElementById('username');
    const usernameError = document.getElementById('username-error')
    const userPadrão = /^[a-zA-ZÀ-ÿ]+$/;

    if (!username.value){
        valid = false
        usernameError.textContent = "Preencha o nome! (Exemplo: usuario)"
        username.classList.add('invalid')
    } else if (username.value.length < 5){
        valid = false
        usernameError.textContent = "O nome de usuário deve ter no mínimo 5 digitos! (Exemplo: usuario)"
        username.classList.add('invalid')
    } else if (!userPadrão.test(username.value)){
        valid = false
        usernameError.textContent = "O nome de usuário só permite letras sem espaço! (Exemplo: usuario)"
        username.classList.add('invalid')
    } else {
        usernameError.textContent = ""
        username.classList.remove('invalid')
    }

    /* email */
    const email = document.getElementById('email')
    const emailError = document.getElementById('email-error')
    const emailPadrão = /^[a-zA-Z-À-ÿ0-9+-._%]+[@][a-zA-Z]+[.]+[a-zA-Z.]+$/

    if(!email.value){
        valid = false
        emailError.textContent = "Preencha o E-mail! (Exemplo: user123@gmail.com)"
        email.classList.add('invalid')
    } else if (!emailPadrão.test(email.value)){
        valid = false
        emailError.textContent = "Digite um E-mail válido! (Exemplo: user123@gmail.com)"
        email.classList.add('invalid')
    } else {
        emailError.textContent = ""
        email.classList.remove('invalid')
    }
    /* genero */
    const gender = document.getElementById('gender')
    const genderError = document.getElementById('gender-error')
    if (!gender.value){
        valid = false
        genderError.textContent = "Insira uma das opções!"
        gender.classList.add('invalid')
    } else {
        genderError.textContent = ""
        gender.classList.remove('invalid')
    }

    /* Nascimento */
    const nascimento = document.getElementById('data')
    const nascimentoError = document.getElementById('data-error')
    const valor = new Date(nascimento.value)
    const hoje = new Date()
    const idade = hoje.getFullYear() - valor.getFullYear()
    
    if(!nascimento.value){
        valid = false
        nascimentoError.textContent = "Preencha a data!"
        nascimento.classList.add('invalid')
    } else if (valor > hoje){
        valid = false
        nascimentoError.textContent = "A data não pode ser futura!"
        nascimento.classList.add('invalid')
    } else if (idade < 18){
        valid = false
        nascimentoError.textContent = "O usuário deve ter 18 anos ou mais neste ano!"
        nascimento.classList.add('invalid')
    }else {
        nascimentoError.textContent = ""
        nascimento.classList.remove('invalid')
    }

    /* Senha */
    const senhaError = document.getElementById('senha-error')
    const senhaPadrão = /^[a-zA-ZÀ-ÿ0-9%$#@*&-+_]+$/

    if (!senha.value){
        valid = false
        senhaError.textContent = "Preencha a senha (Exemplo: password123)"
        senha.classList.add("invalid") 
    } else if(senha.value.length < 5){
        valid = false
        senhaError.textContent = "A senha deve ter no mínimo 5 digitos (Exemplo: password123)"
        senha.classList.add("invalid") 
    } else if (!senhaPadrão.test(senha.value)){
        valid = false
        senhaError.textContent = "A senha deve incluir letras ou números (Exemplo: password123)"
        senha.classList.add("invalid") 
    } else {
        senhaError.textContent = ""
        senha.classList.remove('invalid')
    }

    /* Confirmar */
    const confirmarError = document.getElementById('confirmar-error')

    if (!confirmar.value){
        valid = false
        confirmarError.textContent = "Confirme sua senha!"
        confirmar.classList.add("invalid")
    } else if (!(senha.value == confirmar.value)) {
        valid = false
        confirmarError.textContent = "Esse campo deve ser igual à sua senha escolhida!"
        confirmar.classList.add("invalid")
    } else{
        confirmarError.textContent = ""
        confirmar.classList.remove('invalid')
    }

    /* impedindo envio se inválido */
    if (!valid){
        ev.preventDefault();
    } else{
        alert('cadastro efetuado com sucesso!')
    }
})