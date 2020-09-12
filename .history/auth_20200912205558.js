// getting data from stroe

// db.collection('contacts').get().then( snapshot =>{
//     // setup(snapshot.docs)
//     snapshot.docs.forEach(doc =>{
//         console.log(doc.data())
// })
    dbc


// check user authentication
auth.onAuthStateChanged( user =>{
    console.log(user)
})





// sign up form configurations
const signUpForm = document.querySelector('#form-given');

    signUpForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = signUpForm['email'].value 
    const password = signUpForm['password'].value 
  
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred)
    })
    const modal = document.querySelector('#signup-modal')
    M.Modal.getInstance(modal).close()
    signUpForm.reset();
})

// Log in form configuration;

const logInForm  = document.querySelector('#loginForm');

    logInForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        // set the values
        const email = loginForm['email'].value 
        const password = loginForm['password'].value 

        // authenticate sign in 
       const authwithsignin = auth.signInWithEmailAndPassword(email, password).then(cred =>{
            console.log(cred)
        });
        const modal = document.querySelector('#login-modal')
         M.Modal.getInstance(modal).close()

        //  reset the form
        logInForm.reset();
    })


// working with the signOut button

const signOut = document.querySelector('#signOut');

signOut.addEventListener('click', () =>{
    auth.signOut().then(function(e) {
        // Sign-out successful.
        console.log('sign Out successful',e)
      }).catch(function(error) {
        // An error happened.
        console.log(error.message)
      });
});