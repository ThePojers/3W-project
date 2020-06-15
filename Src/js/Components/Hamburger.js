

class Hamburger {
  constructor(){
    const thisHamburger = this;
    thisHamburger.getElements();
    thisHamburger.initHamburger();
    thisHamburger.initHamburgerMediaResize();
  }


  getElements(){
    const thisHamburger = this;
    thisHamburger.elements = document.querySelector('body');
    thisHamburger.btn = document.querySelector('.side');
    thisHamburger.btnTop = document.querySelector('.top');
    thisHamburger.sidebarContainer = document.querySelector('.sidebar-container');
    thisHamburger.sectionElements = document.querySelectorAll('.center');
    thisHamburger.mediaMobile = window.matchMedia('(max-width: 1000px)');
    thisHamburger.mediaComp = window.matchMedia('(min-width: 1001px)');
  }

  initHamburger(){
    const thisHamburger = this;

    thisHamburger.btnTop.addEventListener('click', function(){
      thisHamburger.btnTop.classList.toggle('position-fixed');
      if (thisHamburger.mediaMobile.matches){
        thisHamburger.sidebarContainer.classList.toggle('sidebar-hidden');
        thisHamburger.btnTop.classList.toggle('hamburger-icon-hidden');
      } else {
        thisHamburger.sidebarContainer.classList.toggle('sidebar-hidden');
        thisHamburger.btnTop.classList.toggle('hamburger-icon-hidden');

        for ( let sectionElement of thisHamburger.sectionElements ) {
          sectionElement.classList.toggle('margin-width');
          
        }
      }
    });
  }

  initHamburgerMediaResize(){
    const thisHamburger = this;
    
  
    //when you enter
    if (thisHamburger.mediaMobile.matches) {
      thisHamburger.btnTop.classList.remove('position-fixed');
      thisHamburger.sidebarContainer.classList.add('sidebar-hidden');
      thisHamburger.btnTop.classList.add('hamburger-icon-hidden');
      for ( let sectionElement of thisHamburger.sectionElements ) {
        sectionElement.classList.add('margin-width');
      }
    } 
  
    //listener to change 1000 resolution
    thisHamburger.mediaMobile.addEventListener('change', function() {

      if (thisHamburger.mediaMobile.matches) {
        thisHamburger.btnTop.classList.remove('position-fixed');
        thisHamburger.sidebarContainer.classList.add('sidebar-hidden');
        thisHamburger.btnTop.classList.add('hamburger-icon-hidden');
        for ( let sectionElement of thisHamburger.sectionElements ) {
          sectionElement.classList.add('margin-width');
        }
      }
    });
    //listener to change above 1000 resolution
    thisHamburger.mediaComp.addEventListener('change', function() {
      
      if (thisHamburger.mediaComp.matches) {
        thisHamburger.btnTop.classList.add('position-fixed');
        thisHamburger.sidebarContainer.classList.remove('sidebar-hidden');
        thisHamburger.btnTop.classList.remove('hamburger-icon-hidden');
        for ( let sectionElement of thisHamburger.sectionElements ) {
          sectionElement.classList.remove('margin-width');
        }
      }
    });
    
  }
}

export default Hamburger;