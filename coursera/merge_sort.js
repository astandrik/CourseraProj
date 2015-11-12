var fs = require("fs")

var arr = fs.readFileSync("C:/Work/test.txt", "utf8").split('\r\n').map(function(i) { return parseInt(i)});;

var inversions = 0;

function merge(arr, p, q, r) {
    var i = p;
    var j = q + 1;
    var outPut = [];
    var k = 0;
    while(i <= q && j <= r) {
        if(arr[i] < arr[j]) {
            outPut[k++] = arr[i++];
        } else  {
            outPut[k++] = arr[j++]; 
            if(i<=q) inversions += q - i + 1;
        }
    }
    if(i > q) {
        while(j <= r) {
            outPut[k++] = arr[j++];
        }
    }
    if(j > r) {
        while(i <= q) {
            outPut[k++] = arr[i++];
        }
    }
    k = 0;
    for(var i = p; i<=r;i++) {
        arr[i] = outPut[k++];
    }
}

function mergeSort(arr, p, r) {
    if(p==r) return;
    var q = Math.floor((p + r) / 2)
    mergeSort(arr, p, q);
    mergeSort(arr, q+1, r);
    merge(arr, p, q, r);
}

mergeSort(arr,0,arr.length-1)
console.log(inversions);