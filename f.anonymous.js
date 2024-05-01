// Return median of two sorted arrays of the same size.

let arr1=[1,5,9,12,15]
let arr2=[3,4,7,10,11]
// let arr1 = [1, 2, 3, 6]
// let arr2= [4, 6, 8, 10]

let n = arr1.length;

let median = function(arr1, arr2, n) {

    let i=0;
    let j=0;
    let value1 =0;
    let value2 =0;

    for(let count=0; count<=n; count++) {
       
      if(arr1[i]<arr2[j])
      {
        value1=arr1[i];
        i++;
      }
      else if(arr1[i]>arr2[j])
      {
        value2=arr2[j];
        j++;
      }
      else if(arr1[i] === arr2[j])
      {
        value1=arr1[i];
        i++;
      }
    }
    // console.log('Median1',value1);
    // console.log('Median2',value2);
    return (value1+value2)/2;
}

if(arr1.length === arr2.length)
{
    console.log('Median is',median(arr1,arr2,n))
}
else
{
  console.log('Array size should be equal for programm run')
}