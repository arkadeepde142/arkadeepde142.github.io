// const callToActionButton = document.querySelector(".call-to-action")
// callToActionButton.addEventListener("click", (event) => {
//     callToActionButton.classList.toggle("")
// })


const goToTopButton = document.getElementById("go-to-top");
window.addEventListener('scroll', (e)=> {
    if(document.body.scrollTop > window.innerHeight/10 || document.documentElement.scrollTop > window.innerHeight / 10) {
        goToTopButton.hidden = false;
    } else {
        goToTopButton.hidden = true;
    }
})
goToTopButton.addEventListener('click', (e) => {
    if(!goToTopButton.hidden) {
        document.querySelector("body").scrollIntoView({behavior: "smooth"});
    }
})