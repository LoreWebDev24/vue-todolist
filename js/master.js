const { createApp } = Vue;

createApp({
    data() {
        return {
            logoPath: './img/logo.png',
            newTask: '',
            error: false,
            todos: [
            ]
        }
    },
    methods: {
        addTask(){
            if(this.newTask.length >= 5) {
                const newTaskObj = {
                    text: this.newTask,
                    done: false,
                };
                this.todos.unshift(newTaskObj);
                this.newTask = '';
                this.error = false;
            }else {
                this.error = true;
            }
        },
        removeTask(){
            this.todos.splice(index,1)
        }

    },
    mounted() {
    console.log('Vue Kappa');
    }
}).mount('#app');

