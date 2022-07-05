<template>
    <div :key="task.id" v-for="task in tasks">
    
    <!--- Is  $emit('toggle-reminder' , task.id) valid? Do we need to add task.id to delete selected task?-->

        <Task @toggle-reminder="$emit('toggle-reminder' , task.id)"
            @delete-task="$emit('delete-task', task.id)" 
            :task="task" />
    </div>
</template>

 <script>

    import Task from './Task'
 
    export default {
        name: 'Tasks',
        props: {
            tasks: Array,
        },
        components: {
            Task,
        },
        emits: ['delete-task', 'toggle-reminder'],
    }
 </script>