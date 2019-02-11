var todo = new Vue({
    el: '#todo',
    data: {
        todo: '',
        todoList: [],
    },
    methods: {
        addTodo: function () {
            if (this.todo){
                todoItem = {
                    todo: this.todo,
                    checked: false,
                }
            } else{
                return false;
            }         
            this.todoList.push(todoItem);
            this.saveToLocalStorage();
            this.todo = '';
        },
        removeTodo: function (key) {
            this.todoList.splice(key, 1);
            this.saveToLocalStorage();
        },
        updateTodo: function () {
            this.saveToLocalStorage();
        },
        saveToLocalStorage: function () {
            localStorage.setItem('todoList', JSON.stringify(this.todoList));
        }
    },
    mounted: function () {
        this.todoList = JSON.parse(localStorage.getItem('todoList'));
    }

})