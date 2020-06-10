

class initPages {
  constructor(){
    this.getElements();
    this.events();
  }

  getElements() {

    this.linksButton = document.querySelector('.link-sidebar');
    this.generalButton = document.querySelector('.general-sidebar');
    
  }

  events() {
    const links = document.querySelector('.link-container');
    const generalStats = document.querySelector('.general-container');

    this.linksButton.addEventListener('click', function(){
      generalStats.classList.remove('active-section');
      links.classList.add('active-section');
    });

    this.generalButton.addEventListener('click', function(){
      generalStats.classList.add('active-section');
    });    
  }
}

export default initPages;