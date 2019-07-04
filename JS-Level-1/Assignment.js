class Todo
{
    constructor(title) {
        Todo.nextId++
        this.id = Todo.nextId
        this.title = title
        this.status = false
    }
}
Todo.nextId = 0


class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {   /////working
      let todo = new Todo(title)
      this.todos.push(todo)
    }

    editTodo(id, newTitle) {  /////working
        
        this.todos = this.todos.map((todo) => {
            if(todo.id == id){
                todo.title = newTitle
            }
            return todo
          })
    }
    completeTodo(id) {    /////working
       this.todos = this.todos.map((todo) => {
        if(todo.id == id){
            todo.status = true
        }
        return todo
      })
    }
    completeAll() {  /////working
         this.todos = this.todos.map((todo) => { todo.status = true
            return todo
          })
    }
    deleteTodo(id) {  /////working
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    clearCompleted() {   ////working
        this.todos = this.todos.filter(todo => !todo.status)
    }
    view() {  /////working
        this.todos.forEach(todo => console.log(todo))
    }
}

var todoService = new TodoService();
todoService.addTodo('item-1');
todoService.addTodo('item-2');
todoService.addTodo('item-3');
todoService.addTodo('item-4');
todoService.addTodo('item-5');

console.log("Add Todo ***********")
todoService.editTodo(2, "Nitesh")
todoService.view()
todoService.completeTodo(3)
console.log("Completed ***************")
todoService.view()
todoService.completeAll()
console.log("Complete All ***************")
todoService.view()
todoService.deleteTodo(1)
console.log("Delete Todo ***************")
todoService.view()
todoService.addTodo('item-5');
todoService.clearCompleted()
console.log("Clear Completed ***************")
todoService.view()