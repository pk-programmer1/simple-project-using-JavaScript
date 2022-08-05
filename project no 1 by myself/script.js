const showindiv1 = document.querySelector(".showindiv1");
const showindiv2 = document.querySelector(".showindiv2");

showindiv1.addEventListener("click",  ()=> {
    showindiv1.classList.toggle("active");
    showindiv2.classList.toggle("active");
})
showindiv2.addEventListener("click",  ()=> {
    showindiv1.classList.toggle("active");
    showindiv2.classList.toggle("active");
})
