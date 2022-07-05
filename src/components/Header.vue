<template>
    <header>
        <h1> {{ title }} </h1>
      <Button
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
    </header>
</template>


<script>

import Button from './Button'

    export default { 

    name: 'Header',

    // OR use props : ['title']

    props:{
        title: {
            type: String,
         // With no prop being passed we can use 'default: 'hello world''

        },

        components:{
            Button
        }
    }



    }

</script>


<!------- 'scoped' restricts styles to this component --------->

<style scoped>

        header {
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        }

</style>