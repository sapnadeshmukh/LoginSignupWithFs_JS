let readlineSync = require("readline-sync");
const cat1=readlineSync.question("enter a number")
const cat2=readlineSync.question("enter a number")
const mouse=readlineSync.question("enter a number")
var a=(cat1-mouse)
if(a>0){
    console.log(a)
}
else{
    var a=(parseInt(a)*-1)
    console.log(a)
}
var b=(cat2-mouse)
if(b>0){
    console.log(b)

}else{
    var b=(parseInt(b*-1))
    console.log(b)

}
if(a>b){
    console.log("Cat2")
}
else if (a < b){
    console.log( "Cat1")
}
else{
    console.log("Mouse")
}    


