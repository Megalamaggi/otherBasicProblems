const  num = [10,8,7,5,98,83];
const final = (a,b) => b === "Even" ? {Even:a.Even+1} : {Odd:a.Odd+1};


const getCount = () => result.reduce((a,b) => ({...a,...final(a,b)}),{Even:0,Odd:0});

const result = num.map((ele) => (ele % 2 === 0) ? "Even" : "Odd" );

console.log(result);

console.log(getCount());
