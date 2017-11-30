$(document).ready(function(){

function genRandomNumber(){
    return Math.floor(Math.random() * (120 -19 +1)) + 19;
}
// determine a random number betwen 19-120

var randomNum = genRandomNumber();
console.log(randomNum);
$(".well-lg").html(randomNum);
});



// // basic function structure
// function hello(name){
//     alert("Hello" + name);

// }
// // this is calling the function above
// hello("connor");
// hello("kevin");
// hello("adolfo");

// // array example
// var studentArray = ["Kevin", "John", "Kyle"];
// console.log(studentArray.length);

// for (var i = 0; i < studentArray.length; i++){
//     console.log(studentArray[i]);
//     if(studentArray[i] === "Kevin"){
//         alert ("Got" + studentArray[i]);
//      } else if (studentArray[i] === "Kyle"){
//             alert ("got" + studentArray[i]);
//         }   else {
//                 alert("Not Kevin");
//             }
// }


var redCrystal = "button1"
var blueCrystal = "button2"
var greenCrystal = "button3"
var yellowCrystal = "button4"



