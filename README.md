# Number of Iterations until filling matrix
Determine the minumum number of iterations required to fill matrix.

**NOTE:** There must be at least 1 target element present in the matrix (ie. if the matrix must be filled with 1s, and the original matrix is full of 0s, there must be at least one 1 present in the original matrix)

### How to use it
1. Download app.js file
2. Call the exported method `minimumIterations(matrix, target, original)`

### Inputs
`matrix` is the matrix you want to fill, `target` is the element you want to fill it with, and `original` the original values to be replaced.

### Outputs
An `Object` that contains:
* in its first position `numCurrentIter`: the number of iterations required to fill the `matrix` with the `target` value
* in its second position `matrixUpdated`: a matrix filled with the `target` value.

### Example
If called with a matrix of 5X5 like this filled with `0` that you want to fill with `1`:

   `0 0 0 0 0`
   
   `0 0 0 0 0`
   
   `0 0 0 0 0`
   
   `0 0 0 0 0`
   
   `0 0 0 0 1` 
   
 calling the method
 
`minimumIterations([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,1]], 1, 0)`

will return 

`{
  numCurrentIter: 4,`
  
    matrixUpdated: [
    [ 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1 ]
    ]
`}`
