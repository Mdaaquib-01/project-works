const inputText = document.getElementById('input');
const city = document.getElementById('city');
const temp = document.querySelector('.temp');
const weatherinfo = document.querySelector('.info');
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const searchBtn = document.querySelector('.fa-search')
const main = document.querySelector('main')
let apikey = 'c685d3433c8fcd5759d6c477c88321fd';


let Weatherdata =()=>{ fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText.value},&units=metric&appid=${apikey}`)
          .then(response=> response.json())
          .then(data=>{

             city.innerText = `Weather in ${inputText.value}`
             temp.innerText = `${Math.round(data.main.temp)}°C`;
            const {description,id} = data.weather[0]
            weatherinfo.innerText = description;
            humidity.innerText = `Humidity: ${data.main.humidity}%`;
            wind.innerText = `Wind: ${data.wind.speed}km/h`;

            if(id>=200&&id<=232){
                //Thunderstorm
               main.style.backgroundImage = `url(images/thunder.jpg)`
            }
            else if(id>=300&&id<=321){
                //drizzle
                main.style.backgroundImage = `url(images/drizzle.jpg)`
            }
            else if(id>=500&&id<=531){
                //Rain
                main.style.backgroundImage = `url(images/rain.jpg)`
            }
            else if(id>=600&&id<=622){
                //Snow
                main.style.backgroundImage = `url(images/snow.jpg)`
            }
            else if(id>=701&&id<=781){
                //Atmosphere
                main.style.backgroundImage = `url(images/atmosphere.jpg)`
            } 
            else(id>=800&&id<=804)
            {
                //Clouds
                main.style.backgroundImage = `url(images/clouds.jpg)`
                if(data.main.temp<0){
                    main.style.backgroundImage = `url(images/snow.jpg)`
                }
            }
            console.log(id)
            inputText.value=''
            }).catch(()=>{
                alert('Wrong City Entered')
            });
}
searchBtn.addEventListener('click',()=>{
    Weatherdata()    
})
inputText.addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
         Weatherdata();
    }
})

