var todo = new Vue({
    el: '#todo',
    data: {
        todo: '',
        todoList: [],
    },
    methods: {
        addTodo: function () {
            if (this.todo) {
                todoItem = {
                    todo: this.todo,
                    checked: false,
                }
            } else {
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
        resetTodo: function (key) {
            this.todoList[key].checked = false;
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
        todoLocal = localStorage.getItem('todoList');
        if (todoLocal) {
            this.todoList = JSON.parse(todoLocal);
        } else {
            this.todoList = [];
        }
    }

})