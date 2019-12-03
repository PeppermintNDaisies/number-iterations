let target;
let original;

function minimumIterations(grid, _target, _original)
{
    target = _target;
    original = _original;
    if(grid.every(isTarget)){
        return 0;
    }else if(grid.every(isOriginal)){
        return 'not possible to update';
    }
    else{
        return update(grid.length, grid[0].length, grid, 0);
    }
}

const update = (rows, columns, grid, numCurrentIter) =>{
    let matrixUpdated = Array(rows).fill(Array(columns).fill(0));
    numCurrentIter++;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(isTarget(grid[i][j])){
                matrixUpdated[i][j] = target
                if(i === 0 && j === 0){
                    matrixUpdated[i][j+1] = target
                    matrixUpdated[i+1][j] = target
                }else if(i === 0 && j < columns-1){
                    matrixUpdated[i][j-1] = target
                    matrixUpdated[i][j+1] = target
                    matrixUpdated[i+1][j] = target
                }else if(i === 0 && j === columns-1){
                    matrixUpdated[i][j-1] = target
                    matrixUpdated[i+1][j] = target
                }else if(j === 0 && i < rows-1){
                    matrixUpdated[i][j+1] = target
                    matrixUpdated[i+1][j] = target
                    matrixUpdated[i-1][j] = target
                }else if(j === 0 && i === rows-1){
                    matrixUpdated[i][j+1] = target
                    matrixUpdated[i-1][j] = target
                }else if(i === rows-1 && j === columns-1){
                    matrixUpdated[i][j-1] = target
                    matrixUpdated[i-1][j] = target
                }
                else if(i === rows-1){
                    matrixUpdated[i][j-1] = target
                    matrixUpdated[i][j+1] = target
                    matrixUpdated[i-1][j] = target
                }else if(j === columns-1){
                    matrixUpdated[i][j-1] = target
                    matrixUpdated[i+1][j] = target
                    matrixUpdated[i-1][j] = target
                }else{
                    matrixUpdated[i][j+1] = target
                    matrixUpdated[i][j-1] = target
                    matrixUpdated[i+1][j] = target
                    matrixUpdated[i-1][j] = target
                }
            }
        }
    }
    
    if((matrixUpdated.map(row => row.every(isTarget))).every(allRowUpdated)){
        
        return {numCurrentIter, matrixUpdated};
    }
    else{
        return update(rows, columns, matrixUpdated, numCurrentIter);
    }
}
const isTarget = cell =>{
    return cell === target;
}

const isOriginal = cell =>{
    return cell === original;
}

const allRowUpdated = cell =>{
    return cell === true;
}
// FUNCTION SIGNATURE ENDS

console.log(minimumIterations([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,1]], 1, 0))

module.exports = minimumIterations;