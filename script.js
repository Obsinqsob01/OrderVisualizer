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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Draw the rectangles in the canvas
function drawRectangles(max, len, section){
    context.clearRect(0,0, canvas.width, canvas.height);

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
async function order(list){
    for(var i = 0; i < list.length; i++){
        for(var j = 0; j < list.length; j++) {
            if(list[i] < list[j]){
                var temp = list[j];
                list[j] = list[i];
                list[i] = temp;

                await sleep(1000);
                drawRectangles(max, len, section);
                
            }
        }
    }
}

btnOrder.addEventListener("click", () => {
    order(list);
});
