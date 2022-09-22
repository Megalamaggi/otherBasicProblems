const subjects = [
      {
        Tamil: 75,
        English: 90,
        Maths: 85,
        Science: 80,
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
function getResult(data){
    const marks = Object.values(data);
    const compare= marks.every((currvalue) => currvalue >40);
    console.log(compare);
    return compare;
}
function main() {
    const final = subjects.map(getResult);
    console.log(final)
}
main();



