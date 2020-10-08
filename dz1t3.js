/*var array = [1,2,"fbfsbf",3,4,false,4,6,"sdvssv",true,3]
var indexOfArray = 0
var sum = 0
do {
  if (typeof (array[indexOfArray]) == "number") {
    sum = sum + (array[indexOfArray])
}
  indexOfArray ++
}
while (indexOfArray < array.length)
  console.log(sum)
  */

var array = [1,2,3,4,false]
var indexOfArray = 0
var sum = 0
do {
    sum = sum + array[indexOfArray]
    indexOfArray ++
}
while (indexOfArray < array.length -1)
console.log(sum)