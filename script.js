// Icon Navbar Script
const hamburgerMenu = document.querySelector(".nav-btn");
const dropdown = document.getElementById("dropdown-btn");
const ul = dropdown.querySelector("ul");
hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("fa-bars");
    hamburgerMenu.classList.toggle("fa-xmark");
    dropdown.classList.toggle("show-dropdown")
    ul.classList.toggle("show-dropdown")
})

// navbarContainer Change Style
const navbarContainer = document.getElementsByClassName("navbar-container")[0];
window.addEventListener("scroll", function(){
    if (window.scrollY > 10){
        navbarContainer.classList.add("navbar-container-scrolled");
    }else {
        navbarContainer.classList.remove("navbar-container-scrolled");
    }
})
