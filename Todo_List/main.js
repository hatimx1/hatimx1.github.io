const container = document.querySelector(".container");
const forme = document.querySelector(".forme");
const input = document.querySelector(".input");
const add = document.querySelector(".add");
const task = document.querySelectorAll(".tasks");
const icon = document.querySelectorAll(".icon");
let p = document.querySelectorAll("p");

document.body.style.cssText = `
    background-color: rgba(0,0,0,0.1);
`;

container.style.cssText = `
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px);
    margin-top: 50px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`;

forme.style.cssText = `
    width: 100%;
    margin-bottom: 20px;
`;

input.style.cssText = `
    background-color: transparent;
    border: 2px solid #565656;
    padding: 6px;
    color: white;
    width: calc(100% - 95px);
`;

add.style.cssText = `
    padding: 8px;
    background-color: rgba(86, 86, 86, 0.3);
    border: 0;
    color: white;
    font-weight: bold;
`;

function addTaskToHtml(localTask, taskName) {
    // Add task to HTML
    let div = document.createElement("div");
    div.className = "task";
    let p = document.createElement("p");
    let text1 = document.createTextNode(`${localTask}`);
    let icon = document.createElement("div");
    icon.classList.add("icon", `${taskName}`);
    let text2 = document.createTextNode(`X`);

    p.appendChild(text1);
    icon.appendChild(text2);
    div.appendChild(p);
    div.appendChild(icon);
    
    container.appendChild(div);

    // Style the task
    div.style.cssText = `
        margin-bottom: 10px;
        display: flex;
    `;
    
    icon.style.cssText = `
        padding: 10px;
        background-color: rgb(42 114 175);
        font-weight: bold;
        color: white;
    `;
    
    p.style.cssText = `
        color: white;
        font-weight: bold;
        background-color: rgba(86, 86, 86, 0.3);
        padding: 10px;
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

