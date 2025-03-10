// Task class to handle task creation and button functionality
class TaskClass {
  constructor(task) {
    this.text = task;
  }
  // Creates a list item with task and buttons
  createListItem() {
    const li = document.createElement("li");
    li.textContent = this.text;

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    li.appendChild(doneButton);
    doneButton.classList.add("done-button");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);
    deleteButton.classList.add("delete-button");

    // Clear input field after adding task
    document.getElementById("taskText").value = "";

    // Mark task as completed when Done button is clicked
    doneButton.addEventListener("click", function () {
      li.style.textDecoration = "line-through";
    });

    //
    deleteButton.addEventListener("click", function () {
      li.remove();
    });
    return li; // Return the created <li> element
  }
}
ž;
// Add task to list when the Add Button is clicked
const element = document.getElementById("addButton");
element.addEventListener("click", function () {
  let taskText = document.getElementById("taskText").value;
  if (!taskText) {
    alert("Please enter a task."); // Show an alert if the task text is empty
    return;
  } else {
    const obj = new TaskClass(taskText);
    const listItem = obj.createListItem();
    document.querySelector("ul").appendChild(listItem);
  }
});
