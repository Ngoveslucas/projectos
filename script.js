document.getElementById("addTaskBtn").addEventListener("click", function(){
    addTask();
});

function addTask() {
    var taskInput = document.getElementById("task");
    var task = taskInput.value;
    if (task.trim() !== "") {
        var taskList = document.getElementById("tasks");
        var li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}