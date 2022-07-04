<template>
    <header>
        <h1> {{ title }} </h1>
        <Button text="add task" color="green" />
        
          <!----  
            - We can create reusable text and colors

          <Button text="Update task" color="green" />
            <Button text="Delete task" color="red" />
            -->
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