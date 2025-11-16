document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("nav > div");

    window.addEventListener("scroll", (event) => {
        sections.forEach(div => {
            div.style.transform = `translateY(${window.scrollY}px)`;
            div.style.transition = "transform 0.1s linear";
        });
    });
});