const { createApp } = Vue;

createApp({
    data() {
        return {
            logoPath: './img/logo.png',
            newTask: '',
            error: false,
            todos: [
                {
                    text: '',
                    done: false
                },
            ]
        }
    },
    methods: {
        addTask(){
            if(this.newTask.length >= 5) {
                this.todos.unshift(this.newTask)
                this.newTask = ''
                this.error = false
            }else {
                this.error = true
            }
        }

    },
    mounted() {
    console.log('Vue Kappa')
    }
}).mount('#app');

