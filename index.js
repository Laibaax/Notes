document.addEventListener("DOMContentLoaded", function() {
const button = document.getElementById("add");
button.addEventListener("click", handleClick);

const input = document.getElementById("text");
input.addEventListener("keydown", handleKeyDown);
});

function handleClick(/* event */) {
    add();
}
function handleKeyDown(event) {
    if(event.key === "Enter") {
        add();
    }
}

function add() {
    const input = document.getElementById("text");
    const note = input.value;
}

function handleClickLIItem(event) {
    const list = document.getElementById("list");
    list.removeChild(event.target);

}

  if (note) {
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.textContent = note;
    item.addEventListener("click", handleClickLIItem);
    list.appendChild(item);
    input.value = ""; //reset input
    input.focus(); 
  }
