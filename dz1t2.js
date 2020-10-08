
// var arr="64ngjk9";
// var res = "";
// for(var i=0;i<arr.length;i++)
// {
//     if (arr[i] >= 0) {
//         res = res + arr[i]
//     }
// }
// console.log(res)

var string = "+0ag89da567hgl"
var elementofstring = 0
var res = ""
do {
  if (string[elementofstring]  >= 0) {
  //console.log(string[elementofstring]);
    res = res + string[elementofstring]
}
  elementofstring ++
}
while (elementofstring  < string.length);
console.log(res);