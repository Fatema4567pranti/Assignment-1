function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((A, B) => A.concat(B), []);
}

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
