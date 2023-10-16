//Task # 01 
// var myVariable ="Hello World"; //legal
// var 123variable ="Hello World"; //illegal
// var _special ="Hello World"; //legal
// var first name ="Hello World"; //illegal
// var 7eleven ="Hello World"; //illegal
// var $price ="Hello World"; //illegal
// var your-variable ="Hello World"; //illegal

//Task # 02
// var total = 10;
// total += 5;
// total -= 3;
// total *= 2;
// console.log(total); //Answer=24

//Task # 03
//var usernum1 = +prompt("Enter first number");
//var usernum2 = +prompt("Enter second number");

//var sum = usernum1 + usernum2;
//alert("The sum of your entered numbers is" +' '+ sum);

//Task # 04
// var booktitle = "Harry Potter";
// var author = "JK Rowling";
// var year =  1997;
 
// var sentence = "The book "+booktitle+" by "+author+" was published in year "+ year;
// console.log(sentence);

//Task # 05
// var usernum = prompt("Enter a number:");
// if(usernum %2 ===0){
//    alert(usernum + " is an even number");
// }else{
//    alert(usernum + " is an odd number");
// }

//Task # 06
// var grade = prompt("Enter your Exam score out of 100");
// if(grade >= 90){
//    alert("Congrats! You got an A");
// }else if(grade >= 80){
//    alert("Congrats! You got a B");
// }else if (grade >= 70){
//    alert("Good Work! You got a C");
// }else if(grade >= 60){
//    alert("Keep Working Hard! You got a D");
// }else{
//    alert("You got a F");
//}

//Task # 07
// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
//var num3 = prompt("Enter third number");
// let maxnum = num1;
//if (num2 > maxnum&&num3) {
//  maxnum = num2;
// }
// if (num3 > maxnum&&num2) {
//  maxnum = num3;
// }
// console.log("The maximum of the three numbers is:", maxnum);

// Task # 08
// var sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i++;
//   }
// }
// console.log(" The sum of all even numbers from 1 to 100 is " + sum );

// Task # 09
// var a=5 ; b=3 ; c=7 ;
// result=a++ - ++c + b + ++c - b++;
// console.log(a); //6
// console.log(b); //4
// console.log(c); //9
// console.log(result); //6

// var a=1 ; b=2 ; c=0 ;
// result=++a - --a+ ++c + c - a++ + --b;
// console.log(a); //2
// console.log(b); //1
// console.log(c); //1
// console.log(result); //3

// var a=2 ; b= 4; c=6;
// result=a++ - --b + c-- + b++ - ++c;
// console.log(a); //3
// console.log(b); //4
// console.log(c); //6
// console.log(result); //2

// var a= 10; b= 5; c=8;
// result=++a + --b - c++ - ++c + b--;
// console.log(a); //11
// console.log(b); //3
// console.log(c); //10
// console.log(result); //1

// var a= 3; b=2 ; c=1;
// result=b-- - --a + ++c - a++ + ++b - a;
// console.log(a); //3
// console.log(b); //2
// console.log(c); //2
// console.log(result); //-1

// var a= 1; b=5 ; c=3;
// result=++c + a-- - b++ + c-- - --a;
// console.log(a); //-1
// console.log(b); //6
// console.log(c); //3
// console.log(result); //5

// var a= 7; b=0 ; c=1;
// result=++c - a-- + --b + b++ - --c + c;
// console.log(a); //6
// console.log(b); //0
// console.log(c); //1
// console.log(result); //-7

// var a= 3; b= 4; c=9;
// result=--a + ++b + c-- - b++ + ++c - --c - --b;
// console.log(a); //2
// console.log(b); //5
// console.log(c); //8
// console.log(result); //7

// var a= 6; b=1 ; c=3;
// result=c++ - b + a-- - --c + b;
// console.log(a); //5
// console.log(b); //1
// console.log(c); //3
// console.log(result); //6

// var a= 10; b= 5; c=8;
// result=a + --b - c - ++c + b-- + a++;
// console.log(a); //11
// console.log(b); //3
// console.log(c); //9
// console.log(result); //11

// Task # 10
// console.log(undefined && false);//undefined
// console.log(true && false);//false
// console.log(true && undefined);//undefined
// console.log(undefined && undefined);//undefined
// console.log('undefined' || 'true');//undefined
// console.log(null || 'true');//true
// console.log(null || undefined);//undefined
// console.log(null && true || false);//false
// console.log(null && true || false && true);//false
// console.log(null && true || true && true);//true
// console.log((null && true) || (true && 1));//1
 
//END