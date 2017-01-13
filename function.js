var todos = ["item1", "item2", "item3"]

function displayTodos() {
	console.log(todos);
}

function addTodo(variable) {
	todos.push(variable);
	displayTodos();
}

function changeTodo(position,variable) {
	todos[position] = variable
	displayTodos()
}

function deleteTodo(position) {
	todos.splice(position,1);
	displayTodos();
}

