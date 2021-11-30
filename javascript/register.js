var register_modal = document.querySelector('.head-but2');
var register_btn = document.querySelector('.register');
var register_btnclose = document.querySelector('.login-right-button');
function toggleModal(){
    register_btn.classList.toggle('hide');
}
register_modal.addEventListener('click',toggleModal);
register_btnclose.addEventListener('click',toggleModal);