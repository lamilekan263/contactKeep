
const setup = (data) =>{
  let html = '';

  data.forEach(doc =>{
    const contact = doc.data();
    const li = `
    <li>
    <div class="collapsible-header"><i class="material-icons">${contact.firstName}, ${contact.firstName}, </i>First</div>
    <div class="collapsible-body"><span>
      <div class="row">
        <div class="col s12 m5">
          <div class="card-panel teal">
            <span class="white-text">I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
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







