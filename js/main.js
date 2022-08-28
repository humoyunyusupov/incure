var elNavBarBtn = document.querySelector(".js-open-navbar");

elNavBarBtn.addEventListener("click", function(){
    elNavBarBtn.closest(".site-header").classList.toggle("navbar-open");
});