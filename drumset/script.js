
window.addEventListener('keydown',(e)=>{
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
   if(!audio)return;
   key.classList.add('add')
   audio.currentTime=0;
   audio.play()
   console.log(key)
   const keys = Array.from(document.querySelectorAll('#element')) 
   keys.forEach(key=>{
       key.addEventListener('transitionend',()=>{
        key.classList.remove('add')
       })
   })
})
