const minimumIterations = require("./app")

console.log(
  minimumIterations([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
  ],
    1,
    0)
)

// Should log
/* { numCurrentIter: 4,
     matrixUpdated: 
       [
         [ 1, 1, 1, 1, 1 ],
         [ 1, 1, 1, 1, 1 ],
         [ 1, 1, 1, 1, 1 ],
         [ 1, 1, 1, 1, 1 ],
         [ 1, 1, 1, 1, 1 ] 
       ] 
    }
 */