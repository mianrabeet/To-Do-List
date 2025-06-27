function addtask() {
    const input1 = document.getElementById("inputbar")
    const taskList = document.getElementById("tasklist1")

    const tasktext = input1.value.trim();

    if (tasktext === "")
        return;

    const li = document.createElement("li")
    li.innerText = tasktext;
    li.style.display = "flex"
    li.style.justifyContent = "space-between"
    li.style.alignItems = "center";
    li.style.padding = "8px 12px";
    li.style.backgroundColor="#f5f5f5"
    li.style.margin="10px"


    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = "🗑️";
    deletebutton.onclick = () => li.remove();
    deletebutton.style.backgroundColor = "skyblue"
    deletebutton.style.padding = "5px"



    li.appendChild(deletebutton);
    taskList.appendChild(li);
    input1.value = "";
}
