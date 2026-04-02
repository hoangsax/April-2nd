/*
  y y y y y
x|0 0 0 0 0|
x|1 1 1 1 0|
x|1 1 1 1 1|

*/
function safePathingBombedGarden(matrix){
    let startingPoint = [];
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            startingPoint.push([i, 0]);
        }
    }
}