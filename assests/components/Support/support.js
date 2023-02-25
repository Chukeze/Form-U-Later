const buttons = document.querySelectorAll('.selection');

const forms = {
    sales: document.querySelector('#sales'),
    user: document.querySelector('#user'),
    general: document.querySelector('#general')
};

let entries = Object.entries(buttons);

entries.forEach(el => el[1].addEventListener('click', () =>{
    changeFormViews(el[0],el[1])
}));

function changeFormViews(keys,value){
    if(keys === '1'){
        value.classList.add('chosen');
        value.previousElementSibling.classList.remove('chosen');
        value.nextElementSibling.classList.remove('chosen');
        forms.sales.classList.add('hidden');
        forms.user.classList.remove('hidden');
        forms.general.classList.add('hidden');
    }else if(keys === '2'){
        value.classList.add('chosen');
        value.previousElementSibling.classList.remove('chosen');
        value.previousElementSibling.previousElementSibling.classList.remove('chosen');
        forms.sales.classList.add('hidden');
        forms.user.classList.add('hidden');
        forms.general.classList.remove('hidden');
    }
    else {
        value.classList.add('chosen');
        value.nextElementSibling.nextElementSibling.classList.remove('chosen');
        value.nextElementSibling.classList.remove('chosen');
        forms.sales.classList.remove('hidden');
        forms.user.classList.add('hidden');
        forms.general.classList.add('hidden');
    }
}