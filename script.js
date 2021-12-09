# Project_3
function gotoTop() {
    window.scrollTo({
        top: e,
        behavior: "smooth",
    })
};
    
 window.addEventListener("scroll", () => {
     const top_btn = document.getElementById("top-btn");
    if (top_btn !== null) {
        top_btn.classList.toggle("show-top-btn", window.scrollY > 200);
    }
 });
