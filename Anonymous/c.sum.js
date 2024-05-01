// Sum of all numbers in an array
let input = [5,10,15,25,35,40,100];
//let input = [1,2,3,4,5];

(function() {
    let i=0;
    let sum=0;
    while(i<input.length) {
        sum=sum+input[i]
        i++;
    }
    console.log('Sum of all number is',sum);
})();