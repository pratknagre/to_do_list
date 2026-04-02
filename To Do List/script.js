function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete" onclick="deleteTask(this)">X</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function toggleTask(element) {
    element.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
    const li = button.parentElement;
    li.classList.add("fade-out");

    setTimeout(() => {
        li.remove();
    }, 400);
}


function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector("span");

    const currentText = span.innerText;

    const newText = prompt("Edit your task:", currentText);

    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText;
    }
}
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <div>
            <button onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">X</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}


// delete button fix

function deleteTask(button) {
    const li = button.closest("li");  
    li.classList.add("fade-out");

    setTimeout(() => {
        li.remove();
    }, 400);
}









// countdown logic   

setInterval(() => {
    const tasks = document.querySelectorAll("li");

    tasks.forEach(task => {
        const deadlineText = task.querySelector(".deadline").innerText.replace("⏰ ", "");
        const countdownEl = task.querySelector(".countdown");

        if (deadlineText === "No deadline") {
            countdownEl.innerText = "⏳ No deadline";
            return;
        }

        const deadline = new Date(deadlineText);
        const now = new Date();

        const diff = deadline - now;

        if (diff <= 0) {
            countdownEl.innerText = "⏰ Time's up!";
            task.style.background = "#ffcccc";
            return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownEl.innerText = `⏳ ${hours}h ${minutes}m ${seconds}s left`;
    });
}, 1000);



//Separate Countdown per Task


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("taskTime");

    const text = taskInput.value;
    const time = timeInput.value;

    if (text === "") return;

    const li = document.createElement("li");

    // ✅ store time inside li
    li.setAttribute("data-time", time);

    li.innerHTML = `
        <div>
            <span onclick="toggleTask(this)">${text}</span><br>
            <small>⏰ ${time || "No deadline"}</small><br>
            <small class="countdown">⏳ Calculating...</small>
        </div>
        <div>
            <button onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">X</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
    timeInput.value = "";
}



//alaram for countdown

setInterval(() => {
    const tasks = document.querySelectorAll("li");

    tasks.forEach(task => {
        const countdownEl = task.querySelector(".countdown");
        const time = task.getAttribute("data-time");

        if (!time) {
            countdownEl.innerText = "⏳ No deadline";
            return;
        }

        const deadline = new Date(time);
        const now = new Date();
        const diff = deadline - now;

        if (diff <= 0) {
            countdownEl.innerText = "⏰ Time's up!";
            task.style.background = "#ffcccc";

            // 🔔 play alarm (only once)
            if (!task.classList.contains("played")) {
                document.getElementById("alarmSound").play();
                task.classList.add("played");
            }

            return;
        }

        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        countdownEl.innerText = `⏳ ${h}h ${m}m ${s}s`;
    });

}, 1000);



// alaram 


setInterval(() => {
    const tasks = document.querySelectorAll("li");

    tasks.forEach(task => {
        const countdownEl = task.querySelector(".countdown");
        const time = task.getAttribute("data-time");

        if (!time) {
            countdownEl.innerText = "⏳ No deadline";
            return;
        }

        const deadline = new Date(time);
        const now = new Date();
        const diff = deadline - now;

        if (diff <= 0) {
            countdownEl.innerText = "⏰ Time's up!";
            task.style.background = "#ffcccc";

            // 🔔 play alarm (only once)
            if (!task.classList.contains("played")) {
                document.getElementById("alarmSound").play();
                task.classList.add("played");
            }

            return;
        }

        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        countdownEl.innerText = `⏳ ${h}h ${m}m ${s}s`;
    });

}, 1000);