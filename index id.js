const subjects = [
      {
        Tamil: 75,
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




const Objects = subjects.map((ele) => Object.values(ele));
console.log(Objects);
const compareElements = (currval) => currval>40;
const result = Objects.map((ele) => ele.every(compareElements));
console.log(result);
const final = Objects.every((ele) => ele.every(compareElements));
console.log(final);
const  index = subjects.map((ele,index)=> ({id:index}));
console.log(index);

