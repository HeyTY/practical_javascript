var todoList = {
	
	list: [],
	
	displayTodos: function() {
		console.log("My todos: " , this.list);
	},

	addTodo: function(todoText) {
		this.list.push({
			todoText: todoText,
			status: false
		});
		this.displayTodos();
	},

	changeTodo: function(position,todoText) {
		// this.list[position] = newValue;

		this.list[position].todoText = todoText;
		this.displayTodos();
	},

	deleteTodo: function(position) {
		this.list.splice(position,1);
		this.displayTodos();
	},

	toggleStatus: function(position) {
		var todo = this.list[position];
		todo.status = !todo.status;
		this.displayTodos();
	}

};


