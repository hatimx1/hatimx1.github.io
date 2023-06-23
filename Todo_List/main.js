const container = document.querySelector(".container");
const forme = document.querySelector(".forme");
const input = document.querySelector(".input");
const add = document.querySelector(".add");
const task = document.querySelectorAll(".tasks");
const icon = document.querySelectorAll(".icon");
let p = document.querySelectorAll("p");

document.body.style.cssText = `
    background-color: rgb(8, 8, 8);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

container.style.cssText = `
    display: flex;
    flex-direction: column;
    padding: 55px 20px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`;

forme.style.cssText = `
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

input.style.cssText = `
    background-color: rgba(255, 255, 255, .1);
    border: 2px solid #565656;
    padding: 12px;
    color: white;
    flex-grow: 1;
`;

add.style.cssText = `
    padding: 15px;
    background-color: rgb(42, 114, 175);
    border: 0;
    color: white;
    margin-left: 5px;
    cursor: pointer;
`;

function addTaskToHtml(localTask, taskName) {
    // Add task to HTML
    let div = document.createElement("div");
    div.className = "task";
    let p = document.createElement("p");
    let text1 = document.createTextNode(`${localTask}`);
    let icon = document.createElement("div");
    icon.classList.add("icon", `${taskName}`);
    icon.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`;

    p.appendChild(text1);
    div.appendChild(p);
    div.appendChild(icon);
    
    container.appendChild(div);

    // Style the task
    div.style.cssText = `
        margin-bottom: 10px;
        display: flex;
    `;
    
    icon.style.cssText = `
        padding: 16px;
        background-color: rgb(175 42 42);
        font-weight: bold;
        color: white;
        cursor: pointer;
    `;
    
    p.style.cssText = `
        color: white;
        font-weight: bold;
        background-color: rgba(86, 86, 86, 0.3);
        padding: 16px;
        margin: 0;
        width: 100%;
    `;

    icon.addEventListener("click", () => {
        for (let i = 1; i <= 1000; i++) {
            if (icon.classList.contains(`task${i}`)) {
                window.localStorage.removeItem(`task${i}`);
                icon.parentElement.remove();
            };
        };
    });
};

// Add task to localStorage
add.addEventListener("click", () => {
    const localTasks = window.localStorage.length;
    for (let i = localTasks+1; i <= localTasks+1; i++) {
        let taskName = `task${Math.ceil(Math.random()*1000)}`;
        window.localStorage.setItem(taskName, `${input.value}`);

        let localTask = window.localStorage.getItem(taskName);
        
        addTaskToHtml(localTask, taskName);
    };
    
});

// restor tasks frome localstorage
const localTasks = window.localStorage.length;
if (localTasks > 0) {
    for (let i = 0; i <= 1000; i++) {
        // extract tasks frome localstorage
        let taskName = `task${i}`;
        let localTask = window.localStorage.getItem(taskName);
        if(localTask) {
            addTaskToHtml(localTask, taskName);
        }
    };
};

// Remove Task
/* let iconDiv = document.querySelectorAll(".icon");
let pDiv = document.querySelectorAll("p");
iconDiv.forEach((e) => {
    e.addEventListener("click", () => {
        for (let i = 1; i <= 1000; i++) {
            if (e.classList.contains(`task${i}`)) {
                window.localStorage.removeItem(`task${i}`);
                e.parentElement.remove();
            };
        };
    });
}); */

