let menu = document.querySelector(".menu");
const modalWindow = document.querySelector(".modal_window");


burger(menu);

function burger(menu) {
    let btnBurger = menu.querySelector(".menu-burger");

    btnBurger.addEventListener("click", () => {
        menu.classList.add("opened");
        event.stopPropagation();
    });

    modalWindow.addEventListener("click", () => {
        menu.classList.remove("opened");
    });
    menu.addEventListener("click", () => {
        menu.classList.remove("opened");
        console.log("Menu closed!");
    })
}