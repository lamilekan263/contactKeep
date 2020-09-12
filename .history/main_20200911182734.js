const form = document.querySelector('#form-given');


form.addEventListener('submit', (e) =>{
    e.preventDefault();



    const name = form['name'].value 
    const email = form['email'].value 

    console.log(name, email)
})