const contactList = document.querySelector('#list')


const setup = (data) =>{
  let html = '';

  data.forEach(doc =>{
    const contact = doc.data();
    const li = `
    <li>
    <div class="collapsible-header"><i class="material-icons">${contact.firstName}, ${contact.lastName}, </i>First</div>
    <div class="collapsible-body"><span>
      <div class="row">
        <div class="col s12 m5">
          <div class="card-panel teal">
            <span class="white-text">
            ${contact.phoneNumber}
            </span>
          </div>
        </div>
      </div>
    </span></div>
  </li>
    `
  })
}

// materialize side nav for mobile

document.addEventListener('DOMContentLoaded', function() {
    // side nav opening
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);


    // modals Opening
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // collapsible opening
    var collapsibleItems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibleItems);
  });







