let form1Btn = document.getElementById('gen');
let form2Btn = document.getElementById('career');
let form1 = document.querySelector('.form1');
let form2 = document.querySelector('.form2')

function form1act(){
    form1.classList.remove('noactive')
     form1.classList.add('active',);
     form2.classList.add('noactive')
     form2.classList.remove('active')
     form1Btn.style.backgroundColor='#F5F5F5';
     form2Btn.style.backgroundColor='#293b4a'
}
function form2act(){
    form2.classList.remove('noactive')
    form2.classList.add('active');
    form1.classList.add('noactive')
    form1.classList.remove('active')
    form2Btn.style.backgroundColor='#F5F5F5';
    form1Btn.style.backgroundColor='#293b4a'
}
