
var todoList = {
	
	list: [],
	
	displayTodos: function() {
		if(this.list.length === 0) {
		console.log("Your todo list is empty!");
		}else{
			console.log("My todos:");
			for(var i = 0; i < this.list.length; i++) {	
				if (this.list[i].status === true) {
					console.log("(x)", this.list[i].todoText);
				}else{
					console.log("( )", this.list[i].todoText);
				}	
			}
		}
	},


	addTodo: function(todoText) {
		this.list.push({
			todoText: todoText,
			status: false
		});
		this.displayTodos();
	},

	changeTodo: function(position,todoText) {
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
		this.displayTodos();
	}


};


var display = document.querySelector("#display");
var toggle  = document.querySelector("#toggle");

display.addEventListener("click", function(){
	todoList.displayTodos();
});

toggle.addEventListener("click", function(){
	todoList.toggleAll();
});


















