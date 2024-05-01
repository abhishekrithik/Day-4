// Convert all the strings to title caps in a string array

let strArray = ['neha', 'abhi', 'ROSE', 'rithik', 'numbeR']

let titleCap = function(strArray) {
    for(let i=0; i<strArray.length; i++) {
        strArray[i] =  strArray[i].toLowerCase();
        strArray[i] = strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1);
    }
    return strArray;
}
console.log(titleCap(strArray));
