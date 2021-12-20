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
               main.style.background = `url(images/thunder.jpg) no-repeat center`
            }
            else if(id>=300&&id<=321){
                //drizzle
                main.style.background = `url(images/drizzle.jpg) no-repeat center`
            }
            else if(id>=500&&id<=531){
                //Rain
                main.style.background = `url(images/rain.jpg) no-repeat center`
            }
            else if(id>=600&&id<=622){
                //Snow
                main.style.background = `url(images/snow.jpg) no-repeat center`
            }
            else if(id>=701&&id<=781){
                //Atmosphere
                main.style.background = `url(images/atmosphere.jpg) no-repeat bottom`
            } 
            else if(id>=800&&id<=804)
            {
                //Clouds
                main.style.background = `url(images/clouds.jpg) no-repeat center`
            }
if(data.main.temp<0){
                main.style.background = `url(images/snow.jpg) no-repeat center`
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

