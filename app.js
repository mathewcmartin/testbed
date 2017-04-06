'use strict';

 /*Write the code to declare a constructor function called Dog and then instantiate Dog objects for dogs named Parker and Demi. This must be a function declaration; a function expression is not permissible.

 The Dog constructor function has two parameters, name and breed, that are assigned to properties of the same name. In addition, all Dogs will be assigned a property called legs that has a numeric value of 4.

 And of course, all Dogs have a property called isAGoodDog that has the boolean value of true.

 The Dog constructor will also have a method called says that is assigned to the constructor's prototype. It takes a parameter named bark and then console.log()s the argument that is passed in.

 We will create an instance of Parker, who is an English Shepherd, and have him say 'woof'. We will also create an instance of Demi, who is a Border Collie, and change the value of her legs property to the numeric value of 3.

 Your code must pass the linter rules we use in Atom:

 Conventions for capitalization and case
 Single-quotes, always
 Be precise with punctuation and spelling
 Put a space after any commas
 Indenting, etc.
 If you write your code in Atom and then copy/paste it here, note that your indenting will be removed and must be manually reapplied in the response field for this quiz.*/

function Dog(name, breed){
  this.dogName = name;
  this.dogBreed = breed;
  this.legs = 4;
  this.isAGoodDog = true;
}
var dogParker = new Dog('Parker', 'English Shepard', 4, true, 'woof');
var dogDemi = new Dog('Demi', 'Border Collie', 3, true);

Dog.prototype.says = function() {
  var dogBark = bark;

  // this.legs = legs;
  // this.isAGoodDog = true;
  // this.says = says;
  // console.log(this.says);
