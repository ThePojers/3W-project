
const Btn = document.querySelector('.hamburger-icon');


Btn.addEventListener('click', function(){
    
  document.querySelector('.sidebar-container').classList.toggle('sidebar-hidden');

  Btn.classList.toggle('hamburger-icon-hidden');

  
});

