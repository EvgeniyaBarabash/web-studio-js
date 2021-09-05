const closeModal = document.querySelector('.close-subscription');
const modal = document.querySelector('.js-backdrop');
const subscribe = document.querySelector('.subscribe-subscription');
closeModal.addEventListener('click', onCloseModal);
subscribe.addEventListener('click', onSubscribeBtnClick);
function onOpenModal(){
        modal.classList.remove('is-hidden')
}
const PROMPT_DELAY = 5000;
const MAX_PROMPT_ATTEMPTS = 2;
let promptCounter = 0;
let hasSubscribed = false;

function repeatOpenModal(){
    setTimeout(()=>{
        if(promptCounter===MAX_PROMPT_ATTEMPTS || hasSubscribed){
            console.log('Максимальное кол-во надоеданий или подписался');
            return;
        };
        console.log('Открываем модалку');
        onOpenModal()
        promptCounter+=1;
    },PROMPT_DELAY);
};

function onCloseModal(){
    modal.classList.add('is-hidden');
    repeatOpenModal();
    
};
function onSubscribeBtnClick(){
    hasSubscribed = true;
    modal.classList.add('is-hidden');
    console.log('Подписался,закрыли модалку');
}

