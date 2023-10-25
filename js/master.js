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
            let newTaskTrimmed = this.newTask.trim()
            if(newTaskTrimmed.length >= 5 && newTaskTrimmed != '' ) {
                const newTaskObj = {
                    text: newTaskTrimmed,
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
            this.todos.splice(this.newTaskObj,1)
        },
        taskDone(itemIndex){
            
            this.todos[itemIndex].done = !this.todos[itemIndex].done;

        }

    },
    mounted() {
    console.log('Vue Kappa');
    }
}).mount('#app');

