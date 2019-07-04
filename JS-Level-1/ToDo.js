
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
    addTodo(title) {
      let todo = new Todo(title)
      this.todos.concat(todo)
      console.log(todo)
    }
    editTodo(id, newTitle) {
        console.log("Hello")
        this.todos = this.todos.map(todo => todo.id === id ? Object.assign({}, todo, { title: newTitle }) : todo)

    }
    completeTodo(id) {
    //    this.todos = this.todos.map((todo) => {
    //     if(todo.id == id){
    //         todo.status = true
    //     }
    //   })
    this.todos = this.todos.map(todo => todo.id === id ? Object.assign({}, {status: true}) : true)
    }
    completeAll() {
        // console.log("hello")
        // this.todos.map(obj =>{ 
        //     var status = {};
        //     status[obj.status] = true;
        //     return status;
        //  });

         this.todos = this.todos.map(todo => {todo.status = true});
         
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.status)
    }
    view() {
        this.todos.forEach(todo => console.log(todo))
    }
}

var todoService = new TodoService();
todoService.addTodo('item-1');
todoService.addTodo('item-2');
todoService.addTodo('item-3');
todoService.addTodo('item-4');
todoService.addTodo('item-5');

todoService.editTodo(2, "Nitesh")
todoService.view()
//BE A DECLARATIVE