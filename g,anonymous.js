// Remove duplicates from an array

let input = [1,'kar',2,'kar', 1, 3, 2, 2, 'l','l',1];

(function() {
    let ans=[];
    ans = input.filter((a,b)=> input.indexOf(a) == b)
    console.log(ans);
})();