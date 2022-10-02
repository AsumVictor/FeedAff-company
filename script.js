const menuToggler = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");

menuToggler.addEventListener('click',()=>{
    menuToggler.classList.toggle("open")
    menu.classList.toggle("hidden")
})


