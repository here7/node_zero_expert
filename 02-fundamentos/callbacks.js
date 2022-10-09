const getUserById = ( id, my_callback ) => {
    const user = {
        id,
        name: 'Dani'
    }

    // Traditional way
    /* 
    setTimeout( () => {
             console.log(user);
     }, 1500)
    */

    // Callback
    setTimeout( () => {
        my_callback(user); // at this point, we're calling the function specified by our parameter
    }, 1000)    
}

// Traditional way
// getUserById(10);

// Callback -> function as parameter
getUserById(10, (user) => {
    console.log(
        `Hello ${user.name}, your User id is ${user.id}`
        );
    console.log(user);
});