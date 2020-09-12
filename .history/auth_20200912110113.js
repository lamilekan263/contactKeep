
const form = document.querySelector('#form-given');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = form['email'].value 
    const password = form['password'].value 
    console.log(`first Name = ${firstName} Last Name = ${lastName} Email = ${email} password = ${password}`)


    // auth.createUserWithEmailAndPassword(email, password).then(cred =>{
    //     console.log(cred)
    // })
    form.reset();
})


// working with the signOut button

const signOut = document.querySelector('#signOut');

signOut.addEventListener('click', () =>{
    auth().signOut().then(function() {
        // Sign-out successful.
        console.log('sign Out successful')
      }).catch(function(error) {
        // An error happened.
        console.log()
      });
})
