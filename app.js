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
 If you write your code in Atom and then copy/paste it here, note that your indenting will be removed and must be manually reapplied in the response field for this quiz.

***************************************************
// Animal class/constructor
function Animal()
{
   this.sound = 'Animal sound!';
}

// Animal `makeSound()` member function
Animal.prototype.makeSound = function() {
   console.log(this.sound);
};

// Dog class/constructor
function Dog()
{
   // call parent constructor to perform initialization logic
   Animal.call(this);

   // shadow the Animal's `sound` member variable with our own `sound` member variable
   this.sound = 'Woof!';
}

inherit(Dog, Animal);

function inherit(childClass, parentClass)
{
   function Wrapper()
   {
       // the wrapper class does not perform initialization logic
   }

   // give the wrapper class the same prototype as the parent class
   Wrapper.prototype = parentClass.prototype;

   // initialize the child's prototype with a new instance of the parent class
   // by using the wrapper class, we avoid calling the parent constructor twice
   childClass.prototype = new Wrapper();
}

var dog = new Dog();

// this call will traverse the prototype chain until it is found at `Animal.prototype.makeSound`
// even so, `this` will refer to the `Dog` class, which shadows the `sound` member variable
dog.makeSound();

// true
console.log('dog instanceof Dog', dog instanceof Dog);

// true
console.log('dog instanceof Animal', dog instanceof Animal);
Not the prettiest thing in the world, but it makes a lot of sense in terms of JS’s prototypical inheritance model.*/

function Dog(name, breed){
  this.name = name;
  this.breed = breed;
  this.legs = 4;
  this.isAGoodDog = true;
}

var dogParker = new Dog('Parker', 'English Shepard');
var dogDemi = new Dog('Demi', 'Border Collie');

dogDemi.legs = 3;
dogParker.barks = 'Woof!';
alert(dogParker.barks);
console.log(dogParker.barks)



// this.legs = legs;
// this.isAGoodDog = isAGoodDog;
// this.barks = barks;
//
//
// this.says = function() {
//   return this.barks;
//   console.log(barks);
// }
// }
// Dog();
// var dogParker = new Dog('Parker', 'English Shepard', 4, true, 'woof');
// var dogDemi = new Dog('Demi', 'Border Collie', 3, true);
//
// Dog.prototype.says = function() {
//   var dogBark = bark;

  // this.legs = legs;
  // this.isAGoodDog = true;
  // this.says = says;
  // console.log(this.says);

// Example function:
  // function Book(name, year) {
  //   console.log(this);
  //   this.name = name;
  //   this.year = year;
  // }
  //
  // var myBook = Book("js book", 2014);
  // console.log(myBook instanceof Book);
  // console.log(window.name, window.year);
  //
  // var myBook = new Book("js book", 2014);
  // console.log(myBook instanceof Book);
  // console.log(myBook.name, myBook.year);
