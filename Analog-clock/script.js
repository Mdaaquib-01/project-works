
const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')
const setDate = ()=>{
  let time = new Date();
  const seconds = time.getSeconds()
  const secdeg = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secdeg}deg)`  
  
  const min = time.getMinutes();
  const mindeg = ((min/60) * 360) + ((seconds/60)*6) + 90;
  minHand.style.transform = `rotate(${mindeg}deg)`;
  
  const hour = time.getHours();
  const hourdeg = ((hour/12) * 360) + ((min/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourdeg}deg)` 

}
setInterval(setDate,1000)
setDate()

let dark = document.querySelector('.bxs-moon');
let light = document.querySelector('.bx-sun')
function change(){
    document.body.classList.toggle('dark-mode');
    let clockdark = document.querySelector('.clock')
    clockdark.classList.toggle('dark');
    let numcolor = document.querySelectorAll('.number')
    for(let i in numcolor){
        numcolor[i].classList.toggle('color')
    }
}
dark.addEventListener('click',function(){
    
        dark.style.display = 'none'
        light.style.display = 'block'
        change()
         
})
light.addEventListener('click',function(){
    
        light.style.display = 'none'
        dark.style.display = 'block'
        change()     
})
