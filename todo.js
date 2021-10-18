// var h = document.createElement('h1')
// var myValue = document.createTextNode('Akshay kore')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)

// var val = 5
// while (val>0) {
//     console.log(val);
//     val--
    
// }


var ul = document.getElementById('list')
var list;






var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeAllButton = document.getElementById('removeAll')
removeAllButton.addEventListener('click', removeAllItem )

function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)

    if (item === '') {
        return false
        
    } else {
        // create list
        list = document.createElement('list');

        // create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')
        
        // create label
        var label = document.createElement('label')
        label.setAttribute('for', 'item') // optional
        var linebreak = document.createElement('br')

        // add these elements on web page
        ul.appendChild(label)
        list.appendChild(checkbox)
        label.appendChild(textnode)
        list.appendChild(label)
        label.appendChild(linebreak)
        ul.insertBefore(list , ul.childNodes[0])
        setTimeout(() => {
            list.className = 'visual'
            
        }, 6);

        input.value = ''
        
    }

    
    
    
}
function removeItem() {
    list = ul.children
    for (let index = 0; index < list.length; index++) {
        while (list[index] && list[index].children[0].checked) {
            ul.removeChild(list[index])
        }
    }
    
}

function removeAllItem() {         
    list = ul.children
    for (let index = 0; index < list.length; index++) {
        ul.removeChild(list[index]);
        index--
         
    }
    
    
}