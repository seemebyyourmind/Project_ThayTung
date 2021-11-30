var login_modal = document.querySelector('.head-but1');
var login_btn = document.querySelector('.login');
var login_btnclose = document.querySelector('.login-right-button');
function toggleModal(){
    login_btn.classList.toggle('hide');
}
login_modal.addEventListener('click',toggleModal);
login_btnclose.addEventListener('click',toggleModal);

