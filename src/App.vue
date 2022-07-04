<template>  

  <div class="container">

    <Header title="Task Tracker" /> 
    <AddTask />
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />

  </div>

</template>

<script>

    import Header from './components/Header'
    import Tasks from './components/Tasks'
    import Task from './components/Task'
      export default {
        name: 'App',
        components: {
          Header,
          Tasks,
        },

        data() {
          return {
            tasks: [],
          }

        },

          methods: {
            deleteTask(id){

              if(confirm('are you sure?')) {
                
                this.tasks = this.tasks.filter((task) => task.id !== 
                id )
              }
            },
            toggleReminder(id){

             // console.log(id)

             this.tasks = this.tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task 
             ) 
            },
        },

        created() {
          this.tasks = [
            {
              id: 1,
              text: 'Doctors Apt',
              day: 'April 1st at 1:30pm',
               reminder: true,
            },
               {
              id: 2,
              text: 'Dentist Apt',
              day: 'April 7st at 1:30pm',
               reminder: true,
            },
               {
              id: 3,
              text: 'Dinner at Steak house ',
              day: 'April 8st at 5:30pm',
               reminder: true,
            }


          ]
        }
      }
</script>

<style>


    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

</style>
