// CLICK=========================
const allBtn = document.querySelectorAll('.filter__button');
console.log(allBtn);
allBtn.forEach((btn)=>btn.addEventListener('click', (event)=>{
    // btn.style.background='blue';
    console.log(event.target);
    btn.classList.toggle('activeBtn');
}));
// INPUT===============
const input = document.querySelector('[type="email"]');
console.log(input);
input.addEventListener('input',(ewt)=>{
    console.log(ewt.target.value);
});
input.addEventListener('change',(e)=>{
    console.log(e.target.value)
});
const form = document.querySelector('.form-footer');
console.log(form);
form.addEventListener('submit',(ewt)=>{
     //сначала останавливаем дефолтное событие отправки
     ewt.preventDefault();
    console.log(ewt.target.elements);
    console.log(ewt.target.elements.email.value);
   
});

// <a class="logo" href="./index.html"><span class="logo__text">Web</span>Studio</a>

const headerLogoLink = document.createElement('a')

headerLogoLink.setAttribute('href', './index.html')

headerLogoLink.classList.add('logo')

headerLogoLink.textContent = 'Studio'
const headerSpan = document.createElement('span');
headerSpan.classList.add('logo__text');
headerSpan.textContent='Web';
const headerDivLogo = document.querySelector('nav');
console.log(headerDivLogo);
headerDivLogo.prepend(headerLogoLink);
console.log(headerLogoLink);
headerLogoLink.insertAdjacentElement('afterbegin', headerSpan)
console.log(headerLogoLink);
console.log(headerSpan);
