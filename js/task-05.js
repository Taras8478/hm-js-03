const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let sum1 = 0;

for(const number3 of array1){
    sum1 += number3;
}
for(const number3 of array2){
    sum1 += number3;
}
console.log(`Сума елементів двох масивів: ${sum1}`);