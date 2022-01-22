window.onload = function () {
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const toggleMenu = document.querySelector(".hamburger-menu");
    const navbar = document.querySelector(".nav");
    this.addEventListener('scroll', function (e) {
        if(this.scrollY > 120) {
            header.classList.add("header-scrolling");
            navbar.classList.add("nav-scrolling");
        } else {
            header.classList.remove("header-scrolling");
            navbar.classList.remove("nav-scrolling");
        }
    });

    toggleMenu.addEventListener('click', function () {
        if(!toggleMenu.classList.contains("clicked")) {
            toggleMenu.classList.add("clicked");
            navbar.classList.add("toggle-on");
        } else {
            toggleMenu.classList.remove("clicked");
            navbar.classList.remove("toggle-on");
        }
    });

}