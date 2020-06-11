

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
    thisHamburger.SectionElements = document.querySelectorAll('.center');
    thisHamburger.mediaMobile = window.matchMedia('(max-width: 1000px)');
    thisHamburger.mediaComp = window.matchMedia('(min-width: 1001px)');
    console.log(this.btn);
  }

  initHamburger(){
    const thisHamburger = this;

    thisHamburger.btn.addEventListener('click', function(){
      thisHamburger.btn.classList.add('disable');
      if (thisHamburger.mediaMobile.matches){
        thisHamburger.sidebarContainer.classList.toggle('sidebar-hidden');
        thisHamburger.btn.classList.toggle('hamburger-icon-hidden');
      } else {
        thisHamburger.sidebarContainer.classList.toggle('sidebar-hidden');
        thisHamburger.btn.classList.toggle('hamburger-icon-hidden');

        for ( let SectionElement of thisHamburger.SectionElements ) {
          SectionElement.classList.toggle('margin-width');
          
        }
      }
    });
    thisHamburger.btnTop.addEventListener('click', function(){

      thisHamburger.btn.classList.remove('disable');
      if (thisHamburger.mediaMobile.matches){
        thisHamburger.sidebarContainer.classList.toggle('sidebar-hidden');
        thisHamburger.btn.classList.toggle('hamburger-icon-hidden');
      } else {
        thisHamburger.sidebarContainer.classList.toggle('sidebar-hidden');
        thisHamburger.btn.classList.toggle('hamburger-icon-hidden');

        for ( let SectionElement of thisHamburger.SectionElements ) {
          SectionElement.classList.toggle('margin-width');
          
        }
      }
    });
  }

  initHamburgerMediaResize(){
    const thisHamburger = this;
    
  
    //when you enter
    if (thisHamburger.mediaMobile.matches) {
      thisHamburger.btn.classList.add('disable');
      thisHamburger.sidebarContainer.classList.add('sidebar-hidden');
      thisHamburger.btn.classList.add('hamburger-icon-hidden');
      for ( let SectionElement of thisHamburger.SectionElements ) {
        SectionElement.classList.add('margin-width');
      }
    } 
  
    //listener to change 1000 resolution
    thisHamburger.mediaMobile.addEventListener('change', function() {
      
      
      if (thisHamburger.mediaMobile.matches) {
        thisHamburger.btn.classList.add('disable');
        thisHamburger.sidebarContainer.classList.add('sidebar-hidden');
        thisHamburger.btn.classList.add('hamburger-icon-hidden');
        for ( let SectionElement of thisHamburger.SectionElements ) {
          SectionElement.classList.add('margin-width');
        }
      }
    });
    //listener to change above 1000 resolution
    thisHamburger.mediaComp.addEventListener('change', function() {
      
      if (thisHamburger.mediaComp.matches) {
        thisHamburger.btn.classList.remove('disable');
        thisHamburger.sidebarContainer.classList.remove('sidebar-hidden');
        thisHamburger.btn.classList.remove('hamburger-icon-hidden');
        for ( let SectionElement of thisHamburger.SectionElements ) {
          SectionElement.classList.remove('margin-width');
        }
      }
    });
    
  }
}

export default Hamburger;