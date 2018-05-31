var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//Invierte el eje de las x
context.transform(1, 0, 0, -1, 0, canvas.height);

function getMax(arr){
    var max = arr[0];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

function drawRectangles(max, len, section){
    for(var i = 0; i < list.length; i++){
        context.rect(section * i + 1, 0, section, list[i] * 5);
        context.fillStyle = "deepskyblue";
        context.strokeStyle = "blue";
        context.stroke();
        context.fill();
    }
}

var list = [10, 12, 23, 6, 3, 11, 18];

var max = getMax(list);
var len = list.length;
var section = canvas.width / len;

drawRectangles(max, len, section);
