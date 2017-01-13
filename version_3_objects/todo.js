var todoList = {
	
	list: ["item1", "item2", "item3"],
	
	displayTodos: function() {
		console.log("My todos: " + this.list);
	},

	addTodo: function(todo) {
		this.list.push(todo);
		this.displayTodos();
	},

	changeTodo: function(position,newValue) {
		this.list[position] = newValue;
		this.displayTodos();
	},

	deleteTodo: function(position) {
		this.list.splice(position,1);
		this.displayTodos();
	}
};


