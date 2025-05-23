const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".social-lists");
const liEl = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click",()=> {
    socialListsEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

liEl.forEach((liEl) => {
    liEl.addEventListener("click",() => {
        menuTextEl.innerHTML = liEl.innerHTML;
        socialListsEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    });
});