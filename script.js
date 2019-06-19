window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description" );
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone ");


    if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(position=>{
   long= position.coords.longitude;
   lat = position.coords.latitude;
const proxy ="https://cors-anywhere.herokuapp.com/";
   const api =`${proxy}https://api.darksky.net/forecast/93b46f091a4057a1884e204881bfe47d/${lat},${long}`;
   fetch (api)
   .then(data=>{
       return data.json();
       
   })
   .then(data =>{
       console.log(data);
       const{temperature , summary}= data.currently;

       // set dom elements from the api
       temperatureDegree.textContent=temperature;
       temperatureDescription.textContent=summary;
       locationTimezone.textContent=data.timezone;
   
   });

});
    }
});