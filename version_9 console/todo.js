
var todoList = {
	
	list: [],
	
	addTodo: function(todoText) {
		this.list.push({
			todoText: todoText,
			status: false
		});
	},

	changeTodo: function(position,todoText) {
		this.list[position].todoText = todoText;
	},

	deleteTodo: function(position) {
		this.list.splice(position,1);
	},

	toggleStatus: function(position) {
		var todo = this.list[position];
		todo.status = !todo.status;
	},

	toggleAll: function() {
		var totalTodos = this.list.length;
		var completedTodos = 0;


		// Get number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.list[i].status === true) {
				completedTodos++;
			}
		}

		// Case 1. If everything true, make everything false
		if (completedTodos === totalTodos ) {
			for (var i = 0; i < totalTodos; i++) {
				this.list[i].status = false;
			}
		// Case2. Otherwise, make everything true.
		}else{
			for (var i = 0; i < totalTodos; i++) {
				this.list[i].status = true;
			}
		}
	}

};

var handlers = {
	
	addTodo:    function(){
	var addTodoTextInput = document.querySelector("#addTodoTextInput");
	todoList.addTodo(addTodoTextInput.value);
	addTodoTextInput.value = "";
	view.displayTodos();
	},

	changeTodo: function(){
		var changeTodoPositionInput = document.querySelector("#changeTodoPositionInput"); 
		var changeTodoTextInput = document.querySelector("#changeTodoTextInput");
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = "";
		view.displayTodos();
	},

	deleteTodo: function() {
		var deleteTodoPositionInput = document.querySelector("#deleteTodoPositionInput");
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = "";
		view.displayTodos();
	},

	statusCompleted: function () {
		var statusCompletedPositionInput = document.querySelector("#statusCompletedPositionInput");
		todoList.toggleStatus(statusCompletedPositionInput.valueAsNumber);
		statusCompletedPositionInput.value = "";
		view.displayTodos();
	},
	
	toggleAll: 	function(){
	todoList.toggleAll();
	view.displayTodos();
	}
	
};

var view = {
	displayTodos: function() {
	var todosUl = document.querySelector("ul");
	todosUl.innerHTML = ""
		for (var i = 0; i < todoList.list.length; i++){
			var todoLi  = document.createElement("li");
			var todo = todoList.list[i];
			var todoTextWithCompletion = "";

			if (todo.status === true) {
				todoTextWithCompletion = "(x) " + todo.todoText;
			}else{
				todoTextWithCompletion = "( ) " + todo.todoText;
			}
			todoLi.textContent = todoTextWithCompletion;
			todosUl.appendChild(todoLi);
		}
	}
};












