//DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
console.log('Carregou');

const inputMsg = document.querySelector('#InputMenssage');
console.log(inputMsg);

inputMsg.placeholder = "Digite a sua mensagem";

// const buttonsMsg = document.querySelectorAll('.cursor--pointer');

const buttonSend = document.querySelector(".cursor--pointer[src*='Send']");

const listMsg = document.querySelector(".div--message");

const inputContact = document.querySelector(".div--search input[type='search']");

const inputSearchMessage = document.getElementById("search-message");
console.log(inputSearchMessage)

const listContact = [
    {
        id: 1,
        name: 'Chargram',
        lastMsg: 'Chatgram Web was updated.',
        timeLastMsg: '19:48',
        unread: 1,
        verified: true,
        avatar: './src/assets/images/Avatar.png',
        conversation: [
            { msg: 'Olá, Chatgram', type: 'enviada', time: '19:40' },
            { msg: 'Chatgram Web was updated.', type: 'recebida', time: '19:48' },
        ]
    },
    {
        id: 2,
        name: 'Jessica Drew',
        lastMsg: 'Ok, see you later',
        timeLastMsg: '18:30',
        unread: 2,
        verified: false,
        avatar: './src/assets/images/Avatar-1.png',
        conversation: [
            { msg: 'See you later!', type: 'enviada', time: '18:28' },
            { msg: '😄', type: 'recebida', time: '18:30' },
            { msg: 'Ok, see you later', type: 'recebida', time: '18:30' },
        ]
    },
    {
        id: 3,
        name: 'David Moore',
        lastMsg: "You: i don't remember anything 😄",
        timeLastMsg: '18:30',
        unread: 0,
        verified: false,
        avatar: './src/assets/images/Avatar-2.png',
        conversation: [
            { msg: 'OMG 😲 do you remember what you did last night at the work night out?', type: 'recebida', time: '18:12' },
            { msg: 'no haha', type: 'enviada', time: '18:16' },
            { msg: "i don't remember anything 😄", type: 'enviada', time: '18:30' },
        ]
    },
    {
        id: 4,
        name: 'Greg James',
        lastMsg: 'I got a job at SpaceX 🎉 🚀',
        timeLastMsg: '18:02',
        unread: 0,
        verified: false,
        avatar: './src/assets/images/Avatar-3.png',
        conversation: [
            { msg: 'Guess what?', type: 'recebida', time: '17:58' },
            { msg: 'What happened?', type: 'enviada', time: '18:00' },
            { msg: 'I got a job at SpaceX 🎉 🚀', type: 'recebida', time: '18:02' },
        ]
    },
    {
        id: 5,
        name: 'Emily Dorson',
        lastMsg: 'Table for four, 5PM. Be there.',
        timeLastMsg: '17:42',
        unread: 0,
        verified: false,
        avatar: './src/assets/images/Avatar-4.png',
        conversation: [
            { msg: 'Are we still meeting today?', type: 'enviada', time: '17:35' },
            { msg: 'Table for four, 5PM. Be there.', type: 'recebida', time: '17:42' },
        ]
    },
    {
        id: 6,
        name: 'Office Chat',
        lastMsg: 'Lewis: All done mate 😆',
        timeLastMsg: '17:08',
        unread: 0,
        verified: false,
        avatar: './src/assets/images/Avatar-5.png',
        conversation: [
            { msg: 'Did you finish the task?', type: 'enviada', time: '17:03' },
            { msg: 'Lewis: All done mate 😆', type: 'recebida', time: '17:08' },
        ]
    },
    {
        id: 7,
        name: 'Announcements',
        lastMsg: 'Channel created',
        timeLastMsg: '16:15',
        unread: 0,
        verified: false,
        avatar: './src/assets/images/Avatar-6.png',
        conversation: [
            { msg: 'Welcome to the announcements channel.', type: 'recebida', time: '16:14' },
            { msg: 'Channel created', type: 'recebida', time: '16:15' },
        ]
    },
    {
        id: 8,
        name: 'Little Sister',
        lastMsg: 'Tell mom i will be home for tea 💜',
        timeLastMsg: 'Wed',
        unread: 0,
        verified: false,
        avatar: './src/assets/images/Avatar-7.png',
        conversation: [
            { msg: 'Can you tell mom something for me?', type: 'recebida', time: 'Wed' },
            { msg: 'Sure, what is it?', type: 'enviada', time: 'Wed' },
            { msg: 'Tell mom i will be home for tea 💜', type: 'recebida', time: 'Wed' },
        ]
    },
    {
        id: 9,
        name: 'Art Class',
        lastMsg: 'Emily: Editorial',
        timeLastMsg: 'Tue',
        unread: 0,
        verified: false,
        avatar: './src/assets/images/Avatar-8.png',
        conversation: [
            { msg: 'What is the theme for this week?', type: 'enviada', time: 'Tue' },
            { msg: 'Emily: Editorial', type: 'recebida', time: 'Tue' },
        ]
    }
];

inputSearchMessage.addEventListener('input', () => {
    const termSearch = inputSearchMessage.value;
    console.log(`O termo buscado foi: ${termSearch}`);
    searchMessage(termSearch);
})

inputContact.addEventListener('input', () => {
    const termSearch = inputContact.value;
    console.log(`O termo buscado foi: ${termSearch}`);
    loadContact(termSearch);
});

// buttonSend.classList.add("minha-classe");

const responseBot = [
    'Olá, tudo bem?',
    'Como você está?',
    'Qual seu nome',
    'Meu nome é bot',
]

function searchMessage(term) {
    let foundMsg = false;
    const msgElements = document.querySelectorAll('.message');

    msgElements.forEach((msg) => {
        const textOriginal = msg.innerText;
        const textNormal = textOriginal.toLowerCase();
        const termNormal = term.toLowerCase();

        if (textNormal.includes(termNormal) && term !== "") {
            foundMsg = true;

            const textHighlighted = textOriginal.replace(
                new RegExp(`(${term})`, 'gi'),
                "<span class='highlight'>$1</span>"
            );

            msg.innerHTML = textHighlighted;
            msg.style.display = "block";
        } else if (term !== "") {
            msg.style.display = "none";
        } else {
            msg.style.display = "block";
            msg.innerHTML = msg.innerText;
        }
    });

    if (!foundMsg && term !== "") {
        console.log("Não houve resultado");
    }
}

function sendMsg () {
        const text = inputMsg.value.trim();
    if (text === '') {
        alert('Não possui mensagem');
    } else {
        const msgRender = renderMsg('enviada', text, '21:20');
        listMsg.appendChild(msgRender);
        inputMsg.value = '';
        setTimeout(responseMsg, 2000);
    }
}

function responseMsg() {
    const position = Math.floor(Math.random() * responseBot.length);
    const botMsg = responseBot[position];
    const msgRender =  renderMsg('recebida', botMsg, '21:21');
    listMsg.appendChild(msgRender);
}

buttonSend.addEventListener('click', () => {
    sendMsg();
});

inputMsg.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        sendMsg();
    }
});

function renderMsg (type, msg, time) {
    const divMsg = document.createElement('div');
    const direction = type === 'enviada' ? 'end' : 'start';
    const stylesDiv = type === 'enviada' ? 'you' : 'other'; 

    divMsg.classList.add('flex',
        'flex--direction--row',
        `justify--content--${direction}`, 
        'width--100',
        'fade-in');

    divMsg.innerHTML = `
            <div class="flex flex--direction--column message ${stylesDiv}">
                <div class="flex--4">   
                    ${msg}
                </div>
                <div class="flex--1 flex flex--direction--row justify--content--end align--items--center font--size--12 infos--message" >
                    <div>${time}</div>
                    <img src="./src/assets/icons/viewed.png">
                </div> 
            </div>
    `;

    return divMsg;
}

function loadMsgContact (index) {
    const contact = listContact [index];
    listMsg.innerHTML = '';

    contact.conversation.forEach((conversation) => {
        const msgRender = renderMsg(conversation.type, conversation.msg, conversation.time);
        listMsg.appendChild(msgRender);
    });
}

function loadContact(filter = '') {
    
    const divContactElement = document.querySelector('.div--contact');
    divContactElement.innerHTML = '';

    const contactFilter = listContact.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

    if (contactFilter.length === 0){
        divContactElement.innerHTML = '<div><span> Contato não encontrado </span></div>';
        return;
    }

    contactFilter.forEach((contact, index) => {
        console.log(contact);

        const divParentElement = document.createElement('div');
        divParentElement.classList.add('flex', 'area--contact', 'fade-in');

        divParentElement.innerHTML = `
            <div class="flex justify--content--center align--items--center flex--1">
                <img class="avatar--left--bar" src="${contact.avatar}" />
            </div>

            <div class="flex flex--direction--column justify--content--center flex--3">
                <div class="flex align--items--center infos--contact"> 
                    <div class="font--family font--weight--bold">
                        ${contact.name} 
                        ${contact.verified ? `<img src="./src/assets/icons/verified bot.svg" />` : ''}
                    </div>
                </div>
                <div class="last--message">
                    ${contact.lastMsg}
                </div>                            
            </div>

            <div class="flex flex--direction--column align--items--end justify--content--center flex--1 div--last--message--infos">
                <div class="hour--last-message">${contact.timeLastMsg}</div>
                    ${contact.unread > 0 ? `<div class="flex justify--content--center align--items--center quantity--not--viewed--messages background--green">${contact.unread}</div>` : ''}
            </div>
        `;

        divParentElement.addEventListener('click', () => {
            loadMsgContact(index)
        })

        divContactElement.appendChild(divParentElement);
    });
}

    setTimeout(() => {
        loadContact();
    }, 1000);

});
