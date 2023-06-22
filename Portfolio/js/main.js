/* settings box */
const seticon = document.querySelector(".gear-icon i");
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

/* random background */
const optionE = document.querySelectorAll(".rd-bg li");
const bgImgs = ["1.jpg", "2.jpg", "3.jpg"];
const home = document.querySelector(".home");
let bgInt;

function rdBg() {
    bgInt = setInterval(() => {
        const rdNum = Math.floor(Math.random() * bgImgs.length);
        home.style.backgroundImage = "url('img/home/" + bgImgs[rdNum] + "')";
    }, 10000);
};
rdBg();

optionE.forEach((li) => {
    li.addEventListener("click", (e) => {
        optionE.forEach(eLi => {eLi.classList.remove("active")});
        e.target.classList.toggle("active");
        const eOption = e.target.dataset.option;
        if (eOption === "yes") {
            rdBg();
        } else {
            clearInterval(bgInt)
        };
        localStorage.setItem("bgOption", eOption);
    });
});

const localOption = localStorage.getItem("bgOption");

if (localOption === "yes") {
    rdBg();
    optionE[0].classList.add("active");
    optionE[1].classList.remove("active");
} else if (localOption === "no") {
    clearInterval(bgInt);
    optionE[1].classList.add("active");
    optionE[0].classList.remove("active");
};

