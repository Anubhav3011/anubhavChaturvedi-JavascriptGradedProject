window.onload = () => {
	const form_add = document.querySelector("#addForm");
	let items = document.getElementById("items");
	let submit = document.getElementById("submit");
	submit.style.backgroundColor = "BLUE";
	form_add.addEventListener("submit", addItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Add") {
		if (document.getElementById("item").value.trim() == "" || document.getElementById("item").value.trim() == null) {
		document.getElementById("msg").innerHTML = "Task cannot be blank. Please try again.";
		document.getElementById("msg").style.color = "RED";
		document.getElementById("msg").style.display = "block";

		setTimeout(function() {
			document.getElementById("msg").style.display = "none";
		}, 3000);

			return false;
		}
		editItem.target.parentNode.childNodes[0].childNodes[0].data = document.getElementById("item").value;
		submit.value = "Add";

		document.getElementById("item").value = "";
		document.getElementById("msg").innerHTML = "Task edited successfully";
		document.getElementById("msg").style.color = "GREEN";
		document.getElementById("msg").style.display = "block";

		setTimeout(function() {
			document.getElementById("msg").style.display = "none";
		}, 3000);

		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let taskText = document.createElement("span");
	taskText.className = "w-full text-grey-darkest";
	taskText.appendChild(document.createTextNode(newItem));

	let deleteButton = document.createElement("button");
	deleteButton.className = "btn-danger btn btn-sm ml-2 float-right delete";
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.addEventListener("click", removeItem);

	let editButton = document.createElement("button");
	editButton.className = "btn-success btn btn-sm ml-2 float-right edit";
	editButton.appendChild(document.createTextNode("Edit"));
	editButton.addEventListener("click", editItem);

	li.appendChild(taskText);
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if(document.getElementById("item").value.trim() != "" && document.getElementById("item").value.trim() != null) {
		document.getElementById("msg").innerHTML = "Cannot delete while editing. Please try again.";
		document.getElementById("msg").style.color = "RED";
		document.getElementById("msg").style.display = "block";

		setTimeout(function() {
			document.getElementById("msg").style.display = "none";
		}, 3000);

		return false;
	}
	if (confirm("Please confirm you want to delete?")) {
		let li = e.target.parentNode;
		items.removeChild(li);

		document.getElementById("msg").innerHTML = "Task deleted successfully";
		document.getElementById("msg").style.color = "RED";
		document.getElementById("msg").style.display = "block";

		submit.value = "Add";
		setTimeout(function() {
			document.getElementById("msg").style.display = "none";
		}, 3000);
	}
}

function editItem(e) {
	e.preventDefault();
	document.getElementById("item").value = e.target.parentNode.childNodes[0].childNodes[0].data;
	submit.value = "Save";
	editItem = e;
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}