//Write a program that allow to user enter number then printit
// var username = prompt('pleas inter your name');
// document.getElementById('username').innerHTML = username;

//__________________________________________________________________________




// Write a program that take number from user then print yes if that number can divide by 3  and 4 otherwise print no
// var number = Number(prompt(' pleas inter number '));
// if(number %4 == 0 && number %3 == 0 ){
//     document.getElementById('username').innerHTML = 'Yes'
// }
// else{
//     document.getElementById('username').innerHTML = 'No'

// }

//___________________________________________________________________________




//Write a program that allows the user to insert 2 integers then print the max
// var x = prompt(' inter the first number ');
// var y = prompt('inter the secand number ');

// if( x>y){
//     document.getElementById('username').innerHTML= x
// }
// else if(  x < y ){
//     document.getElementById('username').innerHTML = y
// };


//__________________________________________________________________________




// Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// var x = prompt(' inter a number');

// if( x > 0 ){
//     document.getElementById('username').innerHTML= 'positive';
// }
// else if( x < 0 ){
//     document.getElementById('username').innerHTML = 'negative'
// };




//_________________________________________________________________________



//Write a program that take 3 integers from user then print the max element and the min element.

// var x =  prompt('integer 1');
// var y =  prompt('integer 2');
// var z =  prompt('integer 3');

// if( x>y && x>z ){
//     document.getElementById('username').innerHTML= x;
// }
// else if( y>x && y>z ){
//     document.getElementById('username').innerHTML = y;
// }
// else if ( z>x && z>y){
//     document.getElementById('username').innerHTML = z ;
// }
   


//__________________________________________________________________________________



//Write a program that allows the user to insert integer number then check If a number is oven or odd
//  var x = Number( prompt('inter number') );
//  if( x %2 == 0 ){
//     document.getElementById('username').innerHTML = 'number is oven' 
//  }
//  else{
//      document.getElementById('username').innerHTML = 'number is odd'
//  }
// ;



//_________________________________________________________________________________



//Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
//  var x = prompt(' inter a character');

//  if( x =='a' || x=='e'|| x=='i' || x=='o' || x=='u' || x =='A' || x=='E'|| x=='I' || x=='O' || x=='U' ){
//      document.getElementById('username').innerHTML= 'Vowel'
//  }
//  else{
//      document.getElementById('username').innerHTML = 'Consonant';
//  }




//____________________________________________________________________________________



//Write a programthat allows user to insert integer then print all number sbetween 1 to that’s number
// var x = Number(prompt('pleas inter a number '));
// var y = '';
// for (i= 1 ; i <= x  ; i++){
//     y += i
// };
// console.log(y);
//_______________________________________________________________________________________



//Write a program that allows userto insert integerthen print a multiplication table up to 12
// var x = Number( prompt('pleas a number'));
// var y ='';
// for( i= 1 ; i<= 12; i++){
//   y += ' ' + Number(i * x) ;

// };

// console.log(y);

//_____________________________________________________________________________________________



//Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers between 1 to this number
// var x = Number(prompt('pleas inter a Number'));
// var y ='';

// for( i= 2 ; i<= x; i+=2){
//     y+= ' ' + i
// };
// console.log(y);
//__________________________________________________________________________________________


//12- Writeaprogramthattaketwointegersthenprintthepower

//  var x = Number(prompt('inter a first  number' ));
//  var y= Number(prompt('inter a seceand number' ));;
//  var z= 1;
//  for ( i=1 ; i<=x ; i++){
//     z = z * y;
//  }
//  console.log(z);
//_______________________________________________________________________________________________


//- Write a program to enter marks of five subjects and calculate total, average and percentage.

// var sub1= Number( prompt('inter a number'));
// var sub2= Number( prompt('inter a number'));
// var sub3= Number( prompt('inter a number'));
// var sub4= Number( prompt('inter a number'));
// var sub5= Number( prompt('inter a number'));

// function sum(sub1,sub2,sub3,sub4,sub5){
//    return sub1 + sub2+ sub3+ sub4+sub5;
// };
// sum(sub1,sub2 ,sub3,sub4,sub5);
// var sum= sum(sub1,sub2 ,sub3,sub4,sub5);
// console.log('total is '+ sum);

// function average( sum){
//     return sum/5

// }
// var average= average(sum);
// console.log('average is '+ average);
// console.log('percentage '+ average + '%');

//_________________________________________________________________________________________


//Write a program to input month number and print number of days in that month.


//  var numOfMonth= Number(prompt('pleas inter the number of the Month' ));
// if ( numOfMonth == 1 || numOfMonth== 3 || numOfMonth== 5 ||
//      numOfMonth== 7 || numOfMonth== 8 || numOfMonth==10 || numOfMonth== 12) {

//         console.log('Days in Month: 31');
    
// }
// else if ( numOfMonth == 4 || numOfMonth== 6 || numOfMonth== 9 || numOfMonth== 11){
//     console.log('Days in Month: 30');
// }
// else if ( numOfMonth == 2 ){
//     console.log('Days in Month: 28');
// }
//  else {
//     console.log('it is not a month number');

// }
//________________________________________________________________________________________


//Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade 


// var Physics = Number(prompt(' inter Physics Degry'));
// var Chemistry = Number(prompt(' inter Chemistry Degry'));
// var Biology = Number(prompt(' inter Biology Degry'));
// var Math = Number(prompt(' inter Mathematics Degry'));
// var Computer = Number(prompt(' inter Computer Degry'));

// function sum (sub1, sub2,sub3, sub4,sub5){
//     return sub1+ sub2+sub3+ sub4+sub5
// }

// var sum = sum(Physics, Chemistry, Biology, Math , Computer);
// function percentage( sum){
//         return sum/500 *100
// }

// var percentage= percentage(sum);




// if (percentage > 100 || percentage < 0 ){
//     console.log(' error')
// }
// else if  (percentage >= 90   ) {
//     console.log('Grad A')
// } else if (percentage >= 90) {
    
// }
//  else if (percentage >= 80) {
//     console.log('Grad B')
// }
//  else if (percentage >= 70) {
//     console.log('Grad C')
// }
//  else if (percentage >= 60) {
//     console.log('Grad D')
// }
//  else if (percentage >= 40) {

//     console.log('Grad E')
// }
//  else if (percentage < 40) {
//     console.log('Grad F')
// }


//******************************** Using switch case*******************************

//- Write a program to print total number of days in month 


// var x = Number( prompt( ' inter the number of month'))
//  switch(x){

//      case 1 :
//      case 3 :
//      case 5 :
//      case 7 :
//      case 8 :
//      case 10 :
//      case 12 :
//         console.log('Days in Month: 31');
//     break;


//      case  4:
//      case  6:
//      case  9:
//      case  11:
//         console.log('Days in Month: 30');
//     break;


//      case 2 :
//         console.log('Days in Month: 28');
//     break;


//     default:
//         console.log('it is not a month number');

//  }

//__________________________________________________________________


//Write a program to check whether an alphabet is vowel or consonant 

// var x=   prompt(' pleas inter a leter ');

    
//  switch(x){
//      case 'a':
//      case 'e':
//      case 'i':
//      case 'u':
//      case 'o':
//         console.log("is vowel")
//         break;
//     default:
//         console.log("is consonant ")
//  }
 


//______________________________________________________________

// Write a program to find maximum between two numbers 

// var x = Number(prompt('pleas inter a number '));
// var y = Number(prompt('pleas inter a number '));
// var z = Number(prompt('pleas inter a number '));

// switch(true){
//     case x>y && x>z:
//         console.log(x+ ' is maxmam');
//         break;
//     case y> x && y>z:
//         console.log(y+' is maxmam');
//         break;
//     case z>x && z>y :
//         console.log(z +' is maxmam')
//         break;
//     default:
//         console.log('error')
// };



//_______________________________________________________________

//- Write a program to check whether a number is even or odd 


// var x= Number( prompt('inter a number'));

// switch(true){
//     case x %2 == 0:
//         console.log('the number is odd');
//         break;
//     default:
//         console.log('the number is even');

        

// }
//_______________________________________________________________

//Write a program to check whether a number is positive or negative or zero 
// var x = Number(prompt('pleas inter a number'));

// switch(true){
//     case x> 0 :
//         console.log(' the number is positive ');
//         break;
//     case x< 0 : 
//     console.log('the number is negative ');
//         break;
//     default:
//         console.log(' the number is 0');
// }


//____________________________________________________________________

//- Write a program to create Simple Calculator 

// var fNumber = Number(prompt(' inter the first number '))
// var sNumber = Number(prompt(' inter the sacend number '))
// var SimpleCalculation = prompt(' inter the the Simple Calculation ')

// switch(SimpleCalculation){
//     case '+':
//         var sum = fNumber+ sNumber;
//         console.log(sum);
//          break;
//     case '-':
//         var minus= fNumber - sNumber;
//         console.log(minus);
//         break;
//     case '*':
//         var multip= fNumber * sNumber;
//         console.log(multip);
//         break;
//     case '/':
//         var quotient= fNumber / sNumber;
//         console.log(quotient);
//         break;
//     default:

// }
//____________________________________________________________________________________

















