const form = document.querySelector('#form-given');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const firstName = form['first-name'].value 
    const email = form['email'].value 
    console.log(name, email)
})