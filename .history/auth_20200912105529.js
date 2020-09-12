
const form = document.querySelector('#form-given');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = form['email'].value 
    const password = form['password'].value 
    console.log(`first Name = ${firstName} Last Name = ${lastName} Email = ${email} password = ${password}`)


    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred)
    })
    form.reset();
})