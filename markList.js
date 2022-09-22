const file = require('./randomHexa');
// const subject= [
//     {
//         Tamil: 51,
//         English: 90,
//         Maths: 85,
//         Science: 82,
//         Social: 89 
//     },
//     {
//         Tamil: 35,
//         English: 39,
//         Maths: 34,
//         Science: 32,
//         Social: 20
//     }
// ];
//  const array = subject.map((ele,index) => ({...{id: index},...ele}));  
//  console.log(array); 


 const markList = [
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
const marks = markList.map((ele)  => (Object.values (ele)) .reduce((prev,curr)=> prev+curr));
const list = markList.map((ele,index) => ({...{id:index},...{Name: file.getRandomString(5)},...{total: marks[index]},...ele}));
console.log(list);
console.log(marks);
