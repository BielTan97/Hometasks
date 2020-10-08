var arr = [1,2,3,4,5]
function avr (arr) { var sum = 0
    for(var i = 0; i< arr.length; i++) {
        sum = sum + arr[i]
    }
    return(sum / arr.length)
}
console.log(avr(arr));