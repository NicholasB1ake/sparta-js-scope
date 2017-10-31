// var outsideVariable = 5;
//
// function doSomthing(){
//   var outsideVariable = 6;
//   console.log(outsideVariable);
// }
// // doSomthing();
// console.log(outsideVariable);

// function firstFunction(){
//  console.log('i am the first function')
// }
//
// function secondFucntion(){
//   console.log('i am the second function');
//   function insideSecondFunction(){
//     console.log('i am inside the second fucntion')
//   }
// }
//
// secondFucntion();

// function joinStringsAndPrint(string1, string2){
//   var newString = string1 + string2;
//
//   function printString(string){
//     console.log(string);
//   }
//   printString( newString);
// }
//
// var hello ='hello, ';
// var world = 'world';
//
// joinStringsAndPrint( hello, world);


function joinStringsAndPrint( string1 , string2 ) {

	var newString =  string1 + string2;

	function printString( string ) {

		console.log(string);

		// Q3
		// console.log(newString);

		// Q4
		// console.log(string1 + string2);

	}

	printString( newString );

	return newString;


}
var string1 = "hello, ";
var string2 = "world";
joinStringsAndPrint( string1 , string2 );

// Q1
// printString( "run from outside joinStrings" );

// Q2
// console.log(newString)
Add Comment Collapse
