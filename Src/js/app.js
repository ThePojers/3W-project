import DataPicker from './Components/dataPicker.js';
import Hamburger from './Components/hamburger.js';
import InitPages from './Components/initPages.js';
import InitChart from './Components/initChart.js';

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


