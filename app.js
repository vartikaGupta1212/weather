window.addEventListener('load',()=>{
  let lat;
  let long;
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition((position)=>{
      lat = position.coords.latitude;
      long= position.coords.latitude;
      const proxy ="https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
exclude=hourly,daily&appid=a7ab608a8b8fa65ac6533d7e646f72c9`;
      fetch(api).then(response=>{
        return response.json();
      }).then(data=>{
        console.log(data);
        document.querySelector(".location-timezone").innerHTML=`${data.timezone}`;
      });
    });

  }
});
