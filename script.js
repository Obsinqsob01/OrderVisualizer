var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var btnOrder = document.getElementById("btnOrder");

var list = [10, 12, 23, 6, 3, 11, 18, 8];

//Invierte el eje de las x
context.transform(1, 0, 0, -1, 0, canvas.height);

//Return the max number in an array
function getMax(arr){
    var max = arr[0];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

//Draw the rectangles in the canvas
function drawRectangles(max, len, section){
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    for(var i = 0; i < list.length; i++){
        context.beginPath();
        context.rect(section * i + 1, 0, section, list[i] * 5);
        context.fillStyle = "deepskyblue";
        context.strokeStyle = "blue";
        context.stroke();
        context.fill();
        context.closePath();
    }
}

var max = getMax(list);
var len = list.length;
var section = canvas.width / len;

drawRectangles(max, len, section);

//Order the array by bubble
function order(list){
    for(var i = 0; i < list.length; i++){
        for(var j = 0; j < list.length; j++) {
            if(list[i] < list[j]){
                var temp = list[j];
                list[j] = list[i];
                list[i] = temp;

                window.setTimeout(() => {
                    drawRectangles(max, len, section);                            
                }, 1000);
            }
        }
    }
}

btnOrder.addEventListener("click", () => {
    order(list);
});
