
const Btn = document.querySelector('.hamburger-icon');

const SectionElements = document.querySelectorAll('.container');

console.log(SectionElements);

Btn.addEventListener('click', function(){
    
  document.querySelector('.sidebar-container').classList.toggle('sidebar-hidden');

  Btn.classList.toggle('hamburger-icon-hidden');

  for ( let SectionElement of SectionElements ) {
    SectionElement.classList.toggle('margin-width');
  }

});

