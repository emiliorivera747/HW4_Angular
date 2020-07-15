//Lambda, es6, callbacks, loops, JSON, class.
 
 
 
 
// ES6 and onwards support classes and objects in way that is more familiar to someone who comes
// from Java background.
// View details here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 
// -- You first need to declare your class and then access it.
// Similar to Java, the extends keyword is used in class declarations or class expressions to create a class as a child of another class.
class Student {
 
   //field declrations can optionally happen outside the cosntructor.
   //fields can be declared private. Example: #name
   name;
 
   // Instance porperties. Default values can be set with the = operator.
   constructor (name, enrolled = false){
       this.name = name;
       this.enrolled = enrolled
   }
 
   // A method that prints a message with a delay. The promise object will wait 'delay' milliseconds and then
   // pass 'this' via the resolve callback function to the field that is 'await' - ing for the result.
   // When a method returns a promise object we should declare it as 'async'.
   async notify(delay, message){
       return new Promise(resolve => {
           setTimeout(() => {
               console.log(this.name+" received message: "+message);
               resolve(this);
          
           }, delay);
       });  
  
   }
 
 
   // A getter method. Similar to how it is done in Java except here we have a special keyword 'get'
   get status() {
 
       return this.name+ " is enrolled:" + this.enrolled;
   }
 
 
   // If enrolled is true it will // pass the name of the student via the resolve callback function to the field that is 'await' - ing for the result.
   // if student is not enrolled it will pass an error message via the reject method. The reject method will trigger an error on the function call
   // and the client will need to .catch(...) it.
   async isEnrolledSlow(delay){
       // A promise typically has the resolve and reject callbacks.
       return new Promise((resolve,reject) => {
           setTimeout(() => {
           if(this.enrolled)
               reject('Alerady enrolled');
           else{
            
           resolve(false);}
          
           }, delay);
         });
 
   }
}
 
// Creating an empty array. Functionality wise this is similar to ArrayList in Java.
// 'const' means we can not change the variable 'students' but we can change the contents of the object pointed by the variable.
const students = Array();
 
 
students.push(new Student("NameA"),new Student("NameB"),new Student("NameC"),new Student("NameD") );
 
 
 
class Course {
 
   constructor(name = 'CS0000', enrolled = 0, capacity=25, seats, instructor){
 
       this.name = name;
       this.enrolled = enrolled;
       this.capacity = capacity;
       this.seats=seats;
       this.instructor=instructor;
   }
 
   // Can't specify the return type in ES6 but can in TS.
   toString(){
 
      return this.name + " Enrolled: "+this.enrolled+" Capacity: "+this.capacity+" Seats: "+this.seats+" Instructor: "+this.instructor;
 
   }
 
 
   // Delayed check of whether the class has any space left.
   async checkSpaceSlow(delay){
 
       return new Promise((resolve,reject) => {
           setTimeout(() => {
           if(this.capacity>this.enrolled)
          resolve(true);
       else
           reject('Class is full');
          
           }, delay);
       });
 
         }
      
       }
 
    
// Creating a new course object via a class constructor.
const course1 = new Course('CS2114', 100, 105, '0001', 'Esakia');
 
// Creating a new course object via a class constructor.
// unlike 'const' let allows to change referene of 'course2'
let course2 = new Course('CS2314', 103, 105, '0001', 'Esakia');
 
 
// Creating another course object using JSON.
// JSON objects can have method declarations in the body that can reference other fields using 'this' keyword.
const course3 = {
   name:'CS2104',
   enrolled:51,
   capacity:52,
   seats:55,
   instructor:'Esakia',
   toString: function() {
       return this.name + " Enrolled: "+this.enrolled+" Capacity: "+this.capacity+" Seats: "+this.seats+" Instructor: "+this.instructor;
   },
   checkSpaceSlow: async  function(delay){
       return new Promise((resolve,reject) => {
           setTimeout(() => {
       if(this.capacity>this.enrolled)
          resolve(true);
       else
           reject('Class is full');
          
           }, delay);
       });
  }
}
 
// In order to make the JSON based objects be recognized as instances of the 'Course' we need to explicityly specify that.
const course4 =  Object.assign( Object.create(Course.prototype),{
   name:'CS2504',
   enrolled:54,
   capacity:56,
   seats:55,
   instructor:'Esakia',
   toString: function() {
       return this.name + " Enrolled: "+this.enrolled+" Capacity: "+this.capacity+" Seats: "+this.seats+" Instructor: "+this.instructor;
   },
   checkSpaceSlow: async  function(delay){
       return new Promise((resolve,reject) => {
           setTimeout(() => {
       if(this.capacity>this.enrolled)
          resolve(true);
       else
           reject('Class is full');
          
           }, delay);
       });
  }
});
 
 
 
 
let courses = new Array();
 
courses.push(course1, course2, course3);
 
 
// a function can be declared outside a class body. It does not matter
// where we call it from becasue it will be hoisted (a process by which the declarations are moved to the top before execution).
// this function searches for a course inside the array of course based on a course name.
async function slowClassSearch(arrayOfCoures, courseName) {
   return new Promise((resolve,reject) => {
 
       setTimeout(()=> {
                                             // We are using a lambda fucntion (aka anonymous) inside the find paramter.
                                             // the function .find() needs to be told how to search for the value.
                                             // So it needs a function that will receive the current array element, compare it with whatever we are looking for
                                             // We could pass: function (course) {
                                             //   return course.name === courseName;
                                             //                                 }
                                             // but ES6 allows to simplify this by reducing the boilerplate to
                                             // (course)=> { return course.name === courseName; }
                                             // and becasue we have a oneliner we can reduce it even further as shown in the code below:
                                             
           const result = arrayOfCoures.find(course => course.name === courseName);
           if(result)
               resolve(result);
               else
               reject("Course not found!");
           }, 1000);
 
   })
 
}
 
 
 
 
 
// Slowly adds a course to the array of courses.
// Uses 'instanceof' for sanity check
async function slowAddCourse(course, arrayOfCourses){
return new Promise((resolve, reject)=>{
   setTimeout(()=> {
 
       //Similar to Jave we can use 'isntanceOf' to make sure we have a Course and not something else
       if(course instanceof Course){
       arrayOfCourses.push(course);
       resolve("Course added:"+course.name);
       }
       else
       reject(null);
   },1000);
});
  
 
}
 
 
 
 
 
//Slowly increments 'enrolled'
//Returns full if after the increment the course becomes full.
  async function slowIncrement(delay, course){
 
       return new Promise((resolve, reject)=>{
           setTimeout(()=>{
               course.enrolled++;
               if(course.capacity === course.enrolled)
               reject(course.name+ " is full!");
                   else
                   resolve(course.name+ " has "+(course.capacity-course.enrolled)+" seats.");
                  
                   
           },delay);
 
       });
     
     
 
   }
 
 
 
  // 
  async function slowAddStudent(delay, student, course){
       
 
   // Value is returned if the promise calls 'resolve'. The catch blow will execute if the promise call 'reject'
   // The catch block does not halt the execution.
  const isEnrolled = await student.isEnrolledSlow(delay).catch(error =>    console.log("isEnrolled error:"+error));
  console.log("Is enrolled:", isEnrolled);
 
  // The 'await' keyword above ensures that we don't get here before 'isEnrolled' is assigned a value (or the catch block executed).
   if(!isEnrolled)
  student.enrolled = true;
     
          
  const isThereEnoughSpace = await course.checkSpaceSlow(delay).catch(error => console.log("checkSpaceSlow error:"+error));
  console.log("Enough space: ", isThereEnoughSpace);
       
  const notifiedStudent = await student.notify(delay, "You have been enrolled in "+course.name).catch(error => console.log("Notify error:"+error));
  console.log("Notified:", notifiedStudent);
 
  const isIncremented = await slowIncrement(delay, course).catch(error => console.log("Slow increment error:"+error));
 
  // This output will say 'undefined' for 'course3'.
  console.log("Is Incremented:"+isIncremented);
                            
         
 
           }
    
   
// create different function calls like this.    
slowAddStudent(1000, students[0], courses[2]);
 
 
 
 


