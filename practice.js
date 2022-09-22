const { values } = require("@laufire/utils/lib");
const { reducer } = require("@laufire/utils/reducers");
/*const getNum = (num) => (num % 2 === 0) ? "Even" : "Odd" ;
console.log(getNum(10));*/

/*const  getResult = (num) => (num % 3 === 0) ? "num Divisible by 3" : "num is not Divisible by 3" ;
console.log(getResult(7)); /*

const result= "olleH";
const final = result.split("");
console.log(final.reverse().join(""));

/*find unitValues :

const purchases = [
    {
      item: 'Carrot',
      units: 20,
    },
    {
      item: 'Apple',
      units: 2,
    },
    {
      item: 'Guava',
      units: 1,
    }
  ];

  const getUnit = () => purchases.map((ele) => (ele.units));
  console.log(getUnit());*/

  /*accessArray:

  const fruits = ["apple","carrot","grapes"];
  console.log(fruits[0]);*/

  const array = [
	[
		{
			name: 'karpagam',
			country: 'india',
		},
		{
			name: 'abi',
			country: 'india',
		},
		{
			name: 'anitha',
			country: 'india',
		},
		{
			name: 'kavya',
			country: 'india',
		}
	],
	[
		{
			name: 'arun',
			country: 'india',
		},
		{
			name: 'abinaya',
			country: 'india',
		},
		{
			name: 'kavya',
			country: 'india',
		},
		{
			name: 'anitha',
			country: 'india',
		}
	],
	[
		{
			name: 'anitha',
			country: 'india',
		},
		{
			name: 'aishu',
			country: 'india',
        },
    ] 
  ]

 const result = array.filter((array)=> array.length >=4);
 console.log(result);
const final = array.some((ele) => ele[2]);
const total =  array.reduce((a,b) => a.final===b.result);  
const getCommanEle = array.map(result);
  console.log(getCommanEle);

//main();
  /*const getResult = array.flat().map((ele) => (ele.name));
  console.log(getResult);
  const unique = [...new Set(getResult)];
  console.log(unique);*/