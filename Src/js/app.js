import DataPicker from './Components/DataPicker.js';
import Hamburger from './Components/Hamburger.js';
import initPages from './Components/InitPages.js';

const app = {
  init: function(){
    this.initDataPicker();
    this.initHamburger();
    this.initPages();
  },

  initDataPicker: function(){
    new DataPicker();
  },

  initHamburger: function(){
    new Hamburger();
  },

  initPages: function(){
    new initPages();
  }

};
app.init();


