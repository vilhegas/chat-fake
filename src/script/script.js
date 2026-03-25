//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Carregou');

const inputMsg = document.querySelector('#InputMenssage');
console.log(inputMsg);

inputMsg.placeholder = "Digite a sua mensagem";

const buttonsMsg = document.querySelectorAll('.cursor--pointer');
console.log(buttonsMsg);

const buttonSend = document.querySelector(".cursor--pointer[src*='Send']");
console.log(buttonSend);

const listMsg = document.querySelector(".div--message");
console.log(listMsg)

// buttonSend.classList.add("minha-classe");

const responseBot = [
    'Olá, tudo bem?',
    'Como você está?',
    'Qual seu nome',
    'Meu nome é bot',
]

function sendMsg () {
        const text = inputMsg.value.trim();
    if (text === '') {
        alert('Não possui mensagem');
    } else {
        addMsg('enviada', text);
        
        setTimeout(responseMsg, 2000);
    }
}

function responseMsg() {
    const position = Math.floor(Math.random() * responseBot.length);
    const botMsg = responseBot[position];
    addMsg('recebida', botMsg);
}

function addMsg(typeMsg, text) {
    const msgElement = document.createElement('div');
    msgElement.classList.add('message');

    if(typeMsg === 'enviada' ) {
        msgElement.classList.add('you');
    } else {
        msgElement.classList.add('other');
    }

    msgElement.innerText = text;
    listMsg.appendChild(msgElement);
}

buttonSend.addEventListener('click', () => {
    sendMsg();
});

inputMsg.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        sendMsg();
    }
});



});
