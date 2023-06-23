// shanging landing page background images

let landing = document.querySelector(".landing");

let imgs = ["12.jpg", "13.jpg", "14.jpg"];

let bgOption;
let bgInterval;

let bgElemYes = document.querySelector('[data-randombg="yes"]');
let localBgOpt = localStorage.getItem("randombg");

/* function randomBg () {
    if (bgElemYes.classList.contains("active")) {
        bgInterval =  setInterval(
            () => {
                let rn = Math.floor(Math.random() * imgs.length);
                landing.style.backgroundImage = "url('imgs/" + imgs[rn] + "')";
            }, 1000
        );
    } else {
        clearInterval(bgInterval);
    }
}
randomBg () */

function randomBg () {
    bgInterval =  setInterval(
        () => {
            let rn = Math.floor(Math.random() * imgs.length);
            landing.style.backgroundImage = "url('imgs/" + imgs[rn] + "')";
        }, 1000
)};

/* setInterval(
    () => {
        if (bgElemYes.classList.contains("active") || localBgOpt === "yes") {
            let rn = Math.floor(Math.random() * imgs.length);
            landing.style.backgroundImage = "url('imgs/" + imgs[rn] + "')";
        }
    }, 1000
); */

// theme settings

let gear = document.querySelector(".fa-gear");
let theme = document.querySelector(".theme")

gear.addEventListener("click", () => {
    gear.classList.toggle("fa-spin");
    theme.classList.toggle("open");
});

// shanging main color

let colors = document.querySelectorAll(".colors li");

colors.forEach(li => {
    li.addEventListener("click", (e) => {
        let ecolor = e.target.dataset.color;
        document.documentElement.style.setProperty("--main-color", ecolor);
        colors.forEach(li => {
            li.classList.remove("active");
        });
        li.classList.add("active");
        localStorage.setItem("color", ecolor);
    });
});

// saving the color option to localstorage

let localcolor = localStorage.getItem("color");

if (localcolor !== null) {
    document.documentElement.style.setProperty("--main-color", localcolor);
    colors.forEach(li => {
        li.classList.remove("active");
        if ( li.dataset.color === localcolor) {
            li.classList.add("active");
        };
    });

};

// random background

let bgElem = document.querySelectorAll(".randombg li");

bgElem.forEach(li => {
    li.addEventListener("click", (e) => {
        bgElem.forEach(x => {
            x.classList.remove("active");
        });
        li.classList.add("active");
        localStorage.setItem("randombg", li.dataset.randombg);
        if (li.dataset.randombg === "yes") {
            bgOption = true;
            randomBg ()
        } else {
            bgOption = false;
            clearInterval(bgInterval)
        }
    });
});

let localRandBg = localStorage.getItem("randombg");
if (localRandBg !== null) {
    bgElem.forEach(li => {
        li.classList.remove("active");
        if (li.dataset.randombg == localRandBg) {
            li.classList.add("active");
            if (li.dataset.randombg === "yes") {
                bgOption = true;
                randomBg ()
            } else {
                bgOption = false;
                clearInterval(bgInterval);
            };
        };
    });
};

