var watch = document.getElementById('watch');
var color1=document.querySelector('.color1');
var color2=document.querySelector('.color2');
var color3=document.querySelector('.color3');
var color4=document.querySelector('.color4');
var color5=document.querySelector('.color5');

color1.addEventListener('click', function(){
    watch.classList.add('watch');
    watch.classList.remove('pink','black','red','purple')
})
color2.addEventListener('click', function(){
    watch.classList.add('pink');
    watch.classList.remove('watch','black','red','purple')
})
color3.addEventListener('click', function(){
    watch.classList.add('black');
    watch.classList.remove('pink','watch','red','purple')
})
color4.addEventListener('click', function(){
    watch.classList.add('red');
    watch.classList.remove('pink','black','watch','purple')
})
color5.addEventListener('click', function(){
    watch.classList.add('purple');
    watch.classList.remove('pink','black','red','watch')
});
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec +" " + am_pm;
  
    document.getElementById("clocktime")
            .innerHTML = currentTime;
}
showTime();
var clockshow = document.querySelector('.clocktime');
var timebtn = document.getElementById('time');
var heartbtn = document.getElementById('heart');
var heartshow = document.querySelector('.heart')
heartbtn.addEventListener('click',function(){
    if(clockshow.classList.contains('clocktime')){
        clockshow.classList.remove('clocktime')
        clockshow.classList.add('timeclick');
        heartshow.classList.add('heartclick');
    }
})
timebtn.addEventListener('click',function(){
    if(heartshow.classList.contains('heartclick')){
        heartshow.classList.remove('heartclick');
        heartshow.classList.add('heart');
        clockshow.classList.add('clocktime');
        clockshow.classList.remove('timeclick');
    }
})
