var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

function getMax(arr){
    var max = arr[0];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

var list = [10, 12, 23, 6, 3, 11, 18];

var max = getMax(list);
var len = list.length;


