/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    
    let result = {}

    for (let i of this) {
        const key = fn(i)
        if (!result.hasOwnProperty(key)) {
            result[key] =  []
        }        
        result[key].push(i)
    }
    return result
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */