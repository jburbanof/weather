export class Ui{

    constructor(){
        this.location = document.getElementById('weatherLocation');
        this.description = document.getElementById('weatherDescription');
        this.string = document.getElementById('weatherString');
        this.humidity = document.getElementById('weatherHumidity');
        this.wind = document.getElementById('weatherWind');
    

    }
    render(weather){
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.description.textContent = weather.weather[0]['description'];
        this.string.textContent = weather.main.temp + ' °C';
        this.humidity.textContent = 'Humidity: '+weather.main.humidity + ' %';
        this.wind.textContent = 'Wind: ' +weather.wind.speed+ 'm/s';
        
        function backgroundChange(){
            var description = document.getElementById('weatherDescription');
            var body = document.getElementById('body')
            var change = description.textContent.split(' ')[0]+'.jpg'
            console.log(description)
            body.style.backgroundImage=`url(./images/${change})`;
            

        };
        backgroundChange();
    }   
        
        
    
}