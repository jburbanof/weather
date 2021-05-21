const {Weather} = require('./weather');
const {Store} = require('./storage');
const store = new Store();
const {city, countryCode} = store.getlocationData()
const weather = new Weather(city, countryCode);
const {Ui} = require('./ui');
const ui = new Ui();
require('./styles.css');



async function    fetchWeather(){
    const data = await weather.getWeather();
    ui.render(data);
}

document.getElementById('wChangeBtn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    ui.backgroundChange();
  
  });

document.addEventListener('DOMContentLoaded', fetchWeather)