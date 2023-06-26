/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) =>  x => functions.reduceRight((y, f) => f(y), x);

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */