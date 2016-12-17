var firstTimestamp = new Date().getTime();

var select = document.getElementById("select");
var input = document.getElementById("input");
var add = document.getElementById("add");
var selectValue = [];
add.onclick = function(e){
    if(selectValue.indexOf(input.value) < 0){
        selectValue.push(input.value);
        var addSpan = document.createElement('span');
        var deleteSpan = document.createElement('button');
        deleteSpan.appendChild(document.createTextNode("X"));
        addSpan.appendChild(document.createTextNode(input.value));
        addSpan.appendChild(deleteSpan);
        select.insertBefore(addSpan, input);

        deleteSpan.onclick = function(e){
            deleteSpan.parentNode.style.display="none";
        }
    }else{
        
        setTimeout(function(){
            add.style.background = "black"},10)
    }
}

