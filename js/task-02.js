const numbers2 = [23,1,45,87,4,55,6];
let maxNumber = 0;

for(const number2 of numbers2){
    if (number2 > maxNumber) {
        maxNumber = number2;
    }
}
console.log(maxNumber);