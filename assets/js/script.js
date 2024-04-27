let inputNumber = document.getElementById("input__number");
let qtdTentativas = document.querySelector(".tentativas");
let qtdNumeros = document.querySelector(".numerosEscolhidos");
let respostasInterartivas = document.querySelector(".respostas");
let btnPalpites = document.getElementById("btnPalpite");
let btnNovoJogo = document.getElementById("btnNovoJogo");
let imgResultado = document.querySelector(".img__random");
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;
let numerosEscolhidos = [];

updateTentativas();
updateNumerosEscolhidos();

btnPalpites.addEventListener("click", function() {
    checkNumber();
});

btnNovoJogo.addEventListener("click", function() {
    resetGame();
});

function checkNumber(){
    let numeroEscolhido = parseInt(inputNumber.value.trim());

    if (isNaN(numeroEscolhido) || numeroEscolhido <= 0 || numeroEscolhido > 100) 
    {
        respostasInterartivas.textContent = "Número Inválido";
        imgResultado.innerHTML = `<img src="./assets/img/face-sad.png">`;
        respostasInterartivas.classList.add("respostaErrada");
    } 
    else if (numeroEscolhido < numeroSecreto) 
    {
        respostasInterartivas.textContent = "Número Secreto é MAIOR";
        imgResultado.innerHTML = `<img src="./assets/img/face-sad.png">`;
        respostasInterartivas.classList.add("respostaErrada");
    } 
    else if (numeroEscolhido > numeroSecreto) 
    {
        respostasInterartivas.textContent = "Número Secreto é MENOR.";
        imgResultado.innerHTML = `<img src="./assets/img/face-sad.png">`;
        respostasInterartivas.classList.add("respostaErrada");
    } 
    else 
    {
        respostasInterartivas.textContent = "Parabéns! Você acertou o número secreto.";
        imgResultado.innerHTML = `<img src="./assets/img/face-happy.png">`;
        respostasInterartivas.classList.remove("respostaErrada");
        respostasInterartivas.classList.add("respostaCerta");
        btnPalpites.disabled = true;
        btnNovoJogo.disabled = false;
    }

    if (tentativasRestantes > 0) {
        tentativasRestantes--;
        updateTentativas();
        numerosEscolhidos.push(numeroEscolhido);
        updateNumerosEscolhidos();
    }

    if (tentativasRestantes === 0) {
        respostasInterartivas.textContent = "Você excedeu o número de tentativas!";
        btnPalpites.disabled = true;
        btnNovoJogo.disabled = false;
    }
}

function updateTentativas() {
    qtdTentativas.textContent = ` ${tentativasRestantes}`;
}

function updateNumerosEscolhidos() {
    qtdNumeros.textContent = ` ${numerosEscolhidos.join(" - ")}`;
}

function resetGame() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;
    numerosEscolhidos = [];
    inputNumber.value = "";
    respostasInterartivas.textContent = "";
    imgResultado.innerHTML = `<img src="./assets/img/face-question.png">`;
    btnPalpites.disabled = false;
    btnNovoJogo.disabled = true;
    updateTentativas();
    updateNumerosEscolhidos();
}
