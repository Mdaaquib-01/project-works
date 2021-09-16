var addlist = document.getElementById('todo-list');
var btnadd = document.getElementById('add-item');
var inputText = document.getElementById('input-text');
var btnupdate = document.getElementById('update-item');
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
    var deltext = document.createTextNode("");
    dbtn.classList.add('fas', 'fa-trash')
    dbtn.appendChild(deltext);
    newlist.appendChild(dbtn);
    dbtn.addEventListener('click', function() {
        newlist.classList.add('delete');
    })
    newlist.addEventListener('click', function() {
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

btnupdate.addEventListener('click', function() {
    if (inputText.value !== undefined && inputText.value !== null && inputText.value !== '') {

        var firstElement = addlist.firstElementChild;
        var newlist = createnewnode();
        addlist.replaceChild(newlist, firstElement);
        inputText.value = '';
    } else {
        alert('Enter a valid input');
    }
})
clearbtn.addEventListener('click', function() {
    addlist.innerHTML = '';
})
