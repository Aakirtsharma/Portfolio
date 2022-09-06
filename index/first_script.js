let head = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (scrollY >= 80) {
        head.classList.add("bg")
    }
    else {
        head.classList.remove("bg")
    }

});


let toggle = document.getElementById("toggle");
toggle.style.maxHeight = "0px";
function menu() {
    if (toggle.style.maxHeight == "0px") {
        toggle.style.maxHeight = "100%";
    }
    else {
        toggle.style.maxHeight = "0px";
    }

}
let animat=document.querySelectorAll(".contact_col")
window.addEventListener("scroll",() => {
if(scrollY >= 650){
    animat[0].classList.add("animat");
    animat[1].classList.add("animat");
    animat[2].classList.add("animat");
    animat[3].classList.add("animat");
}
else{
    animat[0].classList.remove("animat");
    animat[1].classList.remove("animat");
    animat[2].classList.remove("animat");
    animat[3].classList.remove("animat");
};
})