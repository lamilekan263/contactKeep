
const SignUpForm = document.querySelector('#form-given');

sorm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = form['email'].value 
    const password = form['password'].value 
  
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred)
    })
    form.reset();
})


// working with the signOut button

const signOut = document.querySelector('#signOut');

signOut.addEventListener('click', () =>{
    auth.signOut().then(function() {
        // Sign-out successful.
        console.log('sign Out successful')
      }).catch(function(error) {
        // An error happened.
        console.log(error.message)
      });
})
