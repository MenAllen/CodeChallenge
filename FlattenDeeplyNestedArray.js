
var flat = function (arr, n) {

console.log("flat: ", arr, n)
    let flattenArr = []
    
    if (n === 0) {
        return arr
    }

    for (let index in arr ) {
        console.log("start: ", arr[index], Array.isArray(arr[index]))
        if (Array.isArray(arr[index]) && n > 0) {
            //console.log(arr[index])         
            let newArr = flat(arr[index], --n)
            for (let i in newArr) {
              flattenArr.push(newArr[i])
              //console.log("push: ", flattenArr)           
            }
            n++;
        } else {
            flattenArr.push(arr[index])
            //console.log("push: ", flattenArr)
        }
    }

    return flattenArr;
};

//console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));
//console.log(flat([1, 2, 3, [4, 5, 6],[7, 8]], 1));