const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg', 
        } 
    },

    // defining method for onclick function
methods: {

   // using Fetch API and Async Await we will call random user API 

  async  getUser() {

            // console.log(this.firstName) > should return defined firstName in dom

        const res = await fetch('https://randomuser.me/api')

                // Return result array as JSON in results variable
                
        const { results } = await res.json()

       // console.log(results)

        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large
    },
},
})


app.mount('#app') 