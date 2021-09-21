//var changer= document.getElementById('element');
    
document.body.addEventListener('keydown', function(e){
    var keyinfo = e.keyCode;
    if(keyinfo===65){
        document.getElementById('element1').classList.add('add');
        setTimeout (() => {
            document.getElementById('element1').classList.remove('add');
        }, 500);
        const music = new Audio(src='assests/clap.wav');
         music.play();
    }
    else if(keyinfo===83){
        document.getElementById('element2').classList.add('add');
        setTimeout (() => {
            document.getElementById('element2').classList.remove('add');
        }, 500);
        const music = new Audio(src='assests/hihat.wav');
         music.play();
    }
    else if(keyinfo===68) {
        document.getElementById('element3').classList.add('add');
        setTimeout (() => {
            document.getElementById('element3').classList.remove('add');
        }, 500);
        const music = new Audio(src='assests/kick.wav');
         music.play();
    } 
    else if(keyinfo===70){
        document.getElementById('element4').classList.add('add');
        setTimeout (() => {
            document.getElementById('element4').classList.remove('add');
        }, 500);
        const music = new Audio(src='assests/openhat.wav');
         music.play();
    }
    else if(keyinfo===71){
        document.getElementById('element5').classList.add('add');
        setTimeout (() => {
            document.getElementById('element5').classList.remove('add');
        }, 500);
        const music = new Audio(src='assests/boom.wav');
         music.play();
    }
    else if(keyinfo===72) {
        document.getElementById('element6').classList.add('add');
        setTimeout (() => {
            document.getElementById('element6').classList.remove('add');
        }, 500);
        const music = new Audio(src='assests/ride.wav');
         music.play();
    } 
    else if(keyinfo===74){
        document.getElementById('element7').classList.add('add');
        setTimeout (() => {
            document.getElementById('element7').classList.remove('add');
        }, 500);
        const music = new Audio(src='assests/snare.wav');
         music.play();
    }
    else if(keyinfo===75){
        document.getElementById('element8').classList.add('add');
        setTimeout (() => {
            document.getElementById('element8').classList.remove('add');
        }, 500);
        const music = new Audio(src='assests/tom.wav');
         music.play();
    }
    else if(keyinfo===76){
        document.getElementById('element9').classList.add('add');
        setTimeout (() => {
            document.getElementById('element9').classList.remove('add');
        }, 500);
        const music = new Audio(src='assests/tink.wav');
         music.play();
    } 
})
