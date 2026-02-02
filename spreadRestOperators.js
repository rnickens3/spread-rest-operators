/*
Assignment provided by FreeCodeCamp.org

Completed: February 2nd, 2026
Program Description: Takes any number of arrays with numbers and combines it into one array. It will remove duplicates.
Concepts Learned: Spread operators, rest operators.

User Stories:
1. You should have a function named uniteUnique.
2. The uniteUnique function should accept two or more arrays as arguments.
3. The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].
*/

function uniteUnique(arr1, arr2, ...arrs) { //This allows the function to include any number of arrays.
  
  let combined = [...arr1, ...arr2]; //Spreads the arrays and combines them into a single array
    for (let i = 0; i < arrs.length; i++) {
      combined.push(...arrs[i]); //Pushes the spread arrays into "combined" with duplicates still attached
    }

  //Checks to see if the empty array includes values in "combined"
  let removedDups = [];
    for (let j = 0; j < combined.length; j++) {
      if (!removedDups.includes(combined[j])) { 
        removedDups.push(combined[j]);
      }
    }

  return removedDups;
}
