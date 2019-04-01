const OPEN_MODAL_WINDOW = "visible";
const OPEN_MODAL_REGISTER = "open";
const OPEN_MODAL_LOGIN = "open-login";
const modalWindow = document.querySelector(".modal_window");
const btnLogin = document.querySelector(".btn-login");
const btnRegister = document.querySelector(".btn-register");
const modalRegisterWrapper = document.querySelector(".modal-register-wrapper");
const modalLoginWrapper = document.querySelector(".modal-login-wrapper");

function openRegister () {
    // debugger;
    modalRegisterWrapper.classList.add(OPEN_MODAL_REGISTER);
    modalLoginWrapper.classList.remove(OPEN_MODAL_LOGIN);
}

function openLogin () {
    modalLoginWrapper.classList.add(OPEN_MODAL_LOGIN);
    modalRegisterWrapper.classList.remove(OPEN_MODAL_REGISTER);
}

btnRegister.addEventListener("click", openRegister);
btnLogin.addEventListener("click", openLogin);
// const overlay = document.querySelector(".modal__overlay");
// const btnOpen = document.querySelector(".btn_open");
// const btnNo = document.querySelector(".btn_no");
// const btnYes = document.querySelector(".btn_yes");
//
//
// btnOpen.addEventListener("click", openModal);
// btnNo.addEventListener("click", closeModal);
// btnYes.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);
//
//
function openModal() {
    modalWindow.classList.add(OPEN_MODAL_WINDOW);
}
function closeModal() {
    modalWindow.classList.remove(OPEN_MODAL_WINDOW);
}
setTimeout(() => {
    console.log ("Open modal window!");
    // debugger;
    openModal();
}, 0);
//
// setTimeout (() => {
//     console.log ("Close open window!");
//     closeModal();
// }, 10000);
//