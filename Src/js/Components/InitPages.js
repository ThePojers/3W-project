

class InitPages {
  constructor(){
    const thisInitPages = this;
    thisInitPages.getElements();
    thisInitPages.initEvents();
  }

  getElements() {
    const thisInitPages = this;
    thisInitPages.triggerDom = {};
    thisInitPages.linksButton = document.querySelector('.link-sidebar');
    thisInitPages.generalButton = document.querySelector('.general-sidebar');
    thisInitPages.triggerDom.links = document.querySelector('.link-container');
    thisInitPages.triggerDom.generalStats = document.querySelector('.general-container');
  }

  initEvents() {
    const thisInitPages = this;

    thisInitPages.linksButton.addEventListener('click', function(){

      for(let button in thisInitPages.triggerDom){
        thisInitPages.triggerDom[button].classList.remove('active-section');
      }
      
      thisInitPages.triggerDom.links.classList.add('active-section');
    });

    thisInitPages.generalButton.addEventListener('click', function(){

      for(let button in thisInitPages.triggerDom){
        thisInitPages.triggerDom[button].classList.remove('active-section');
      }

      thisInitPages.triggerDom.generalStats.classList.add('active-section');
      thisInitPages.triggerDom.links.classList.add('active-section');
    });    
  }
}

export default InitPages;