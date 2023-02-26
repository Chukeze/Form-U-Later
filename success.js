function success() {
    let success = document.querySelector('.success-modal');
    let submit = document.querySelector('button');
    let closeModal = document.querySelector('#close');
    if(!!(submit.type === "submit")){
        submit.addEventListener('click', () =>{
            success.classList.remove('hidden');
        })
    }
    if(!!(closeModal.type === "reset")) {
        closeModal.addEventListener('click', () => {
            success.classList.add('hidden');
        })
    } 
}
success();