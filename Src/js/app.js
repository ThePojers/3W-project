import DataPicker from './Components/DataPicker.js';
import Hamburger from './Components/Hamburger.js';
import InitPages from './Components/InitPages.js';
import InitChart from './Components/InitChart.js';

const app = {
  init: function(){
    this.initDataPicker();
    this.initHamburger();
    this.initPages();
    this.initChart();
  },

  initDataPicker: function(){
    new DataPicker();
  },

  initHamburger: function(){
    new Hamburger();
  },

  initPages: function(){
    new InitPages();
  },

  initChart: function(){
    new InitChart();
  }
};
app.init();


