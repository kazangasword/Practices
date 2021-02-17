//object
var shit = new Object();
shit.name = "Apple"; //.name is the member var created
console.log(shit);

shit.eco =new Object();
shit.eco.salary = 1110;
console.log(shit["salary"]);
console.log(shit.eco.salary);

//Object Declaration
var variable = new Object(); //Method 1
var variable5 = {            //Method 2
  variable1: "value",
  variable2: "value"
};
console.log(variable5);


//call by value
var a=7;
var b=a;
//call by reference
a= {x:1};
b=a;
b.x = 5;

//Passing call by value using functions
function func(variable){
  console.log(":Before");
  console.log(variable);
  variable = 10;
  console.log(":After");
  console.log(variable);
}
var value = 5;
func(5);
console.log(":After Function Uno " + value);

//Passing call by reference using functions (we pass objects)
function func2(objValue){
  console.log("Before: " + objValue.x);
  objValue.x = 20;
  console.log("After: " + objValue.x);
}
var obj = {x: 1};
func2(obj);
console.log("After Function: " + obj.x);

//Another way to create objects in JavaScript
function test(){
  console.log(this);
  this.name = "Adil";
}
test();
console.log(window.name);

//Function using constructors
//Function constructor CANNOT RETURN ANYTHING
function Circle//first letter caps shows contructors to other developers
(radius){
  console.log(this);
  this.radius = radius;
  // this.getArea = function(){ //will be created over and over eveytime new Object is called
  //increment of radius
//   this.increment= function(){      //we use self. in place of this for another function inside a function
//   radius = 20;
//   self.radius = radius;
//   console.log(this.getArea());
// }
  //   return Math.PI * Math.pow(this.radius,2);
  // };
}
//Prototype remains outside the function
Circle.prototype.getArea = function(){ //to call once to not be called over and over
  return Math.PI * Math.pow(this.radius,2);
}
var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());

//OBject literal and "this"
var literalCircle = { //new Object() is created implicitly
  radius: 10,
  getArea :function(){
    console.log(this);
    return Math.PI*Math.pow(this.radius,2);
  }
}
console.log(literalCircle.getArea());

//Array
var array = new Array();
array[0] = "Dipri";
array[1] = 69;
array[2] = {course: "HTML, CSS & JavaScript"};
array[3] = function(name){
  console.log ("Hello " + name);
}
console.log(array);
array[3]("Ayaan");
array[3](array[0]);

//short hand array
var shit = ["poop" , "doop" , "cloop"];
console.log(shit);

//transversing in an object
var myObj = {
  name: "Adil",
  course: "HTML",
  platform: "Coursera"
};

for(var prop in myObj){
  console.log(prop + ": " + myObj[prop]); //myObj.prop
}


//Closure
function makeMultiplier(multiplier){
  return (
    function (x) {
      return multiplier * x;
    }
  );
}

var triple = makeMultiplier(3);
console.log(triple(10));


//Fake Namespace
//adilGreeter is to be used in a different file
var adilGreeter = {};
adilGreeter.name = "Adil";
adilGreeter.sayHello = function(){
  console.log("Hello! " + adilGreeter.name);
};

//ayaanGreeter is to be used in a different file
var ayaanGreeter = {};
ayaanGreeter.name = "Ayaan";
ayaanGreeter.sayHello = function(){
  console.log("Hello! " + ayaanGreeter.name);
};
//To be used in a different file
adilGreeter.sayHello();
ayaanGreeter.sayHello();

//Immediate invoked functions
(function(){
  console.log("Hello!");
})();

//To create a local object into global
(function(window){
  console.log("Hellboy!");
  var obj = {
    name:"Adil"
  };
  obj.sayHell = function(){
    console.log("Hell " + obj.name);
  }

  window.obj = obj;
})(window);
