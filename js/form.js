const refs = {
form: document.querySelector('.form'),
textarea: document.querySelector('#coments'),
user: document.querySelector('#user-name'),
telephone: document.querySelector('#user-phone'),
mail: document.querySelector('#user-email'),
};
const {form, textarea,user,telephone,mail} = refs;

form.addEventListener('submit', onFormSubmit);
// textarea.addEventListener('input', onInputTextarea);
function  onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
localStorage.removeItem('data')
};
// function onInputTextarea(e){
//     localStorage.setItem('message', e.currentTarget.value);
// };
// function populateTextarea(){
//     const savedMassage = localStorage.getItem('message');
//     if(savedMassage){
//         textarea.value = savedMassage;
//     }
// };
// populateTextarea()


const formData = {};
form.addEventListener('input', onInputForm);
function onInputForm(e){
    console.log(e.target.name);
    console.log(e.target.value);
    formData[e.target.name]=e.target.value;
    console.log(formData);
    localStorage.setItem('data', JSON.stringify(formData))
};
function getDataFromInput(){
    const saveData = localStorage.getItem('data');
 const parseData = JSON.parse(saveData);
 console.log( parseData);
 if(parseData){
     textarea.value=parseData.message;
     user.value=parseData.name;
     telephone.value=parseData.telephone;
     mail.value=parseData.email;
}
};
getDataFromInput();