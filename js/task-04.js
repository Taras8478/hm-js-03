const array = ["1-Pyton", "2-C++", "3-C#","4-PHP"];
const languages = array;
for(const arr of array){
    console.log(arr.split('').slice(2));
}
console.log(languages);