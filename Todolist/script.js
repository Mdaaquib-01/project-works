var addlist = document.getElementById('todo-list');
var btnadd = document.querySelector('.fa-plus-circle');
var inputText = document.getElementById('input-text');
var clearbtn = document.querySelector('.clear');

inputText.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        addlistitem();
    }
})
function createnewnode() {
    var newlist = document.createElement('li');
    var textnode = document.createTextNode(inputText.value);
    newlist.appendChild(textnode);
    newlist.id = "item" + (addlist.childElementCount + 1);

    var dbtn = document.createElement('i');
    dbtn.classList.add('fas', 'fa-trash');
    newlist.appendChild(dbtn);

    var ckeck = document.createElement('i');
    ckeck.classList.add('far','fa-check-circle');
    newlist.appendChild(ckeck);

    dbtn.addEventListener('click', function() {
        newlist.classList.add('delete');
        newlist.addEventListener('transitionend',function(){
            newlist.remove();
        })
    })
    ckeck.addEventListener('click', function() {
        newlist.classList.toggle('strike');
    })
    return newlist;

}

function addlistitem() {
    if (inputText.value !== undefined && inputText.value !== null && inputText.value !== '') {

        var newlist = createnewnode();
        addlist.appendChild(newlist);

        inputText.value = '';

    } else {
        alert('Enter a valid input');
    }
};
btnadd.addEventListener('click', addlistitem);

clearbtn.addEventListener('click', function() {
    addlist.innerHTML = '';
})
