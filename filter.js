const file = require('./RandomString.js');
const array = [10,20,30,40,50,60,70];
const result = array.filter(array => array > 30);
console.log(result);





const subjects = [
    {
      Tamil: 51,
      English: 90,
      Maths: 85,
      Science: 82,
      Social: 89 
  },
  {
      Tamil: 35,
      English: 39,
      Maths: 34,
      Science: 32,
      Social: 20
  }
  ];

const objects = subjects.map((ele) => Object.values(ele));
console.log(objects);
const marks = objects.flat();
console.log(marks);
const final = marks.filter(objects => objects >50);
console.log(final);
const markArray = subjects.map((ele) => Math.min(...Object.values(ele)));
console.log(markArray);




