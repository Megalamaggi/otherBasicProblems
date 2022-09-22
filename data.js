//const { predicates } = require('@laufire/utils');
const {map,reduce,filter} = require('@laufire/utils/collection');

//const { map } = require("@laufire/utils/collection");

 
// const rate = {
//     apple: 200,
//     orange: 90,
//     mangos: 30
// }
//  map(rate,ele=>console.log(ele));
//  reduce(rate,(a,b)=>a+b,0);
//  console.log(reduce(rate,(a,b)=>a+b,0));
//  console.log(filter(rate,ele=>ele>50));


//const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

//console.log(filter(words,(ele=>ele.length <=8)));

//const array_of_arrays = [[1, 2], [3, 4], [5, 6]];

//const array =  array_of_arrays.reduce((preValue,curValue) => preValue.concat(curValue));
//console.log(array);

const monday = [
    {
        'name'     : 'Write a tutorial',
        'duration' : 180
    },
    {
        'name'     : 'Some web development',
        'duration' : 120
    }
];

const tuesday = [
    {
        'name'     : 'Keep writing that tutorial',
        'duration' : 240
    },
    {
        'name'     : 'Some more web development',
        'duration' : 180
    },
    
    {
        'name'     : 'A whole lot of nothing',
        'duration'  : 240
    }
];
 
// const tasks = [monday, tuesday]; 
// const data = reduce(tasks,((preVal,curVal) => preVal.concat(curVal)),[]);
// console.log(data);

// const result = map(data,((ele) => ele.duration/=60));
// console.log(data);

// console.log(filter(data,((ele) => ele.duration > 2)));


const tasks = [...monday,...tuesday]
const data = map(tasks,((ele) => ele.duration/=60));
console.log(tasks);
console.log(filter(tasks,((ele) => ele.duration > 2)));
