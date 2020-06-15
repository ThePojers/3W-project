/* global flatpickr */


class DataPicker {
  constructor(){
    this.minDate = new Date();
    this.initPlugin();
  }

  initPlugin(){

    flatpickr('.basicDate', {
      defaultDate: this.minDate,
    });
    
  }
}

export default DataPicker;


