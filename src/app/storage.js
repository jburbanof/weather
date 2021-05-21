export class Store {
    constructor(){
        this.city;
        this.countryCode;
        this.defaultCountryCode = 'co';
        this.defaultCity= 'Bogota';
    }
    getlocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city')
           
        }
        if(localStorage.getItem('countryCode') === null){
            this.countryCode = this.defaultCountryCode;
        }else{
            this.countryCode = localStorage.getItem('countryCode');
        }
        
        return{
            city: this.city,
            countryCode: this.countryCode,
        }

    }
    setLocationData(city, country){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}