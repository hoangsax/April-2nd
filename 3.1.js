/*
  y y y y y
x|0 0 0 0 0|
x|1 1 1 1 0|
x|1 1 1 1 1|

*/
function moveRight(point, matrix) {
    let [x, y] = point;
    if (y + 1 < matrix[0].length && matrix[x][y + 1] === 0) {
        return true;
    }
    return false;
}

function moveDown(point, matrix) {
    let [x, y] = point;
    if (x + 1 < matrix.length && matrix[x + 1][y] === 0) {
        return true;
    }
    return false;
}

function moveUp(point, matrix) {
    let [x, y] = point;
    if (x - 1 >= 0 && matrix[x - 1][y] === 0) {
        return true;
    }
    return false;
}

function moveLeft(point, matrix) {
    let [x, y] = point;
    if (y - 1 >= 0 && matrix[x][y - 1] === 0) {
        return true;
    }
    return false;
}

function safePathingBombedGarden(matrix){
    let startingPoint = [];
    let output = [];
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            startingPoint.push([i, 0]);
        }
    }
    while (startingPoint.length > 0) {
        let currentPoint = startingPoint.shift();
        let path = [];
        while (!matrix[currentPoint[0]][currentPoint[1]]) {
            path.push(currentPoint);

        }
    }

}