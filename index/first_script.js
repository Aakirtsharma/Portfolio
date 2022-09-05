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
