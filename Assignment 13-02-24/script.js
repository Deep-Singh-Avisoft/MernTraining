 //Objects
const student = {
    name: "John",
    age: 18,
    grade: 12,
    subjects: ["Math", "Science", "History"]
  };
  
 //Bind, Apply, and Call
  const displayInfo = (message) => {
    console.log(message);
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
  
  const boundDisplayInfo = displayInfo.bind(student);
  boundDisplayInfo(); // Displaying student's information
  
  const displayInfoWithMessage = (message) => {
    console.log(message);
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
  
  displayInfoWithMessage.call(student, "Student Information:"); // Using call
  displayInfoWithMessage.apply(student, ["Student Information:"]); // Using apply
  
 //Callbacks
  const processSubjects = (subjects, callback) => {
    subjects.forEach(subject => {
      callback(subject);
    });
  }
  
  processSubjects(student.subjects, subject => {
    console.log(`Studying ${subject}`);
  });
  
  //Map and Filter
  const doubleGrades = (student) => {
    const doubledGrades = student.subjects.map(subject => subject + ": " + student.grade * 2);
    console.log("Original Grades:", student.grade);
    console.log("Doubled Grades:", doubledGrades);
  }
  
  doubleGrades(student);
  
  const passingSubjects = (student) => {
    const passingSubjects = student.subjects.filter(subject => student.grade >= 70);
    console.log("Subjects with Passing Grade:", passingSubjects);
  }
  
  passingSubjects(student);
  