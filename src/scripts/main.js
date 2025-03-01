const menuIcon = window.document.querySelector("#menu-icon"); 
const menuNav = window.document.getElementById("menu-nav"); 

menuIcon.addEventListener("click", (e) => {
    menuNav.classList.toggle("active"); 
}); 