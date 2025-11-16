document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("nav > div");

    window.addEventListener("scroll", (event) => {
        sections.forEach(div => {
            div.style.transform = `translateY(${window.scrollY}px)`;
            div.style.transition = "transform 0.1s linear";
        });
    });
    
    document.getElementById('boton-hamburguesa').addEventListener("click", (event) =>{
        if(window.innerWidth >= 768){
            cambiarEstadoNav();
        }
    })
});

function cambiarEstadoNav(){
    let nav = document.getElementById('navegable');
    let main = document.getElementById('main');
    let arrClasesNav = Array.from(nav.classList);

    if(arrClasesNav.includes("d-md-flex")){
        console.log("It works");
        nav.classList.remove("d-md-flex");
        main.classList.remove("col-md-8");
    } else{
        nav.classList.add("d-md-flex");
        main.classList.add("col-md-8");
    }
}