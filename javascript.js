var btns = document.querySelectorAll('button');

function printToConsole(index){
    return function(){
        console.log(index);
    };
}

for(var i=0; i<btns.length; i++){
    btns[i].addEventListener('click', printToConsole(i));
}


