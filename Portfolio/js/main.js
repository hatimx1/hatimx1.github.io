/* settings box */
const seticon = document.querySelector(".setting_icon i");
const setbox = document.querySelector(".settings");

seticon.addEventListener("click", (e) => {
    e.target.classList.toggle("fa-spin");
    setbox.classList.toggle("open");
});

/* shanging colors */
const colors = document.querySelectorAll(".colors li");

colors.forEach(li => {
    li.addEventListener("click", e => {
        colors.forEach(li => {
            li.classList.remove("active");
        });
        e.target.classList.toggle("active");
        const color = e.target.dataset.color;
        document.documentElement.style.setProperty("--main-color", color);
        localStorage.setItem("color", color);
    });
});

/* retriving color frome localstorage */
const localColor = localStorage.getItem("color");

if (localColor !== null) {
    document.documentElement.style.setProperty("--main-color", localColor);
    colors.forEach(li => {
        li.classList.remove("active");
    });
    colors.forEach(li => {
        if (li.dataset.color === localColor) {
            
            li.classList.add("active");
        };
    });
};
