let b = [1,2,3,4,5];
function calc(a){
    let sum = 0;
    a.forEach((item) => {
        sum+=item
    });
    return sum
}
console.log(calc(b))
length