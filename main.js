const input = document.querySelector("input");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const display = document.querySelector("div");
const form = document.querySelector("form");

const list = [];

addBtn.addEventListener("click", (ev) => {
	handleSubmit(ev);
})

form.addEventListener("submit", (ev) => {
	handleSubmit(ev);
})

clearBtn.addEventListener("click", () => {
	list.length = 0;
	createDisplayElement();
})

function handleSubmit(ev) {
	ev.preventDefault();
	if (input.value.length > 0) {
		list.push(input.value);
		createDisplayElement();
		input.value = "";
	}
}

function createDisplayElement() {
	while (display.lastChild) {
		display.removeChild(display.lastChild);	
	}
	const newTitle = document.createElement("h3");
	newTitle.innerText = "Grocery List";
	display.appendChild(newTitle);
	for (let i = 0; i < list.length; i++) {
		const newElement = document.createElement("p");
		newElement.id = "groceryItem" + i;
		const newButton = document.createElement("button");
		newElement.innerText = list[i];
		newButton.id = i;
		newButton.className = "elementButton";
		newButton.innerText = "🗸"
		newElement.appendChild(newButton);
		display.appendChild(newElement);
		newButton.addEventListener("click", () => {
			document.getElementById("groceryItem" + newButton.id).style.textDecoration = "line-through";
			document.getElementById("groceryItem" + newButton.id).removeChild(document.getElementById(newButton.id));
		})
	}
}
