var display = document.getElementById('text');
var buttons = document.querySelectorAll('button');
buttons.forEach(function(button){
    button.addEventListener('click', calculate)
})
function calculate(event){
    var buttonvalue = event.target.value;
    if (buttonvalue==='='){
            display.value=eval(display.value);
            if(buttonvalue===''){
                display.value='';
            }
        }
    else if(buttonvalue==='C'){
        display.value='';
    }
    else if(buttonvalue==='del'){
        display.value=display.value.substr(0,display.value.length-1);
    }
    else{
        display.value+=buttonvalue;
    }    
    }
