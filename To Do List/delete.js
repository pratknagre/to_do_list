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

// delete button fix

function deleteTask(button) {
    const li = button.closest("li");  
    li.classList.add("fade-out");

    setTimeout(() => {
        li.remove();
    }, 400);
}
