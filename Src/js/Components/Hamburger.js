

class Hamburger {
  constructor(){

    this.getElements();
    this.initHamburger();
  }


  getElements(){
    this.elements = document.querySelector('body');
    this.btn = document.querySelector('.hamburger-icon');
    console.log(this.btn);
  }

  initHamburger(){
    const btn = this.btn;
    const sidebarContainer = document.querySelector('.sidebar-container');
    const SectionElements = document.querySelectorAll('.container');
    this.btn.addEventListener('click', function(){

      sidebarContainer.classList.toggle('sidebar-hidden');
      btn.classList.toggle('hamburger-icon-hidden');
      for ( let SectionElement of SectionElements ) {
        SectionElement.classList.toggle('margin-width');
      }
    });
  }
}

export default Hamburger;