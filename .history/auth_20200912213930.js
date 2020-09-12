// getting data from stroe


// check user authentication
auth.onAuthStateChanged( user =>{
    if(user){
        db.collection('contacts').get().then( snapshot =>{
            setup(snapshot.docs)
        });
        console.log('user signed in', user)
    }else{
        setup([]);
    }
    
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
    auth.signOut().then(function() {
        // Sign-out successful.
        console.log('sign Out successful',)
      }).catch(function(error) {
        // An error happened.
        console.log(error.message)
      });
});