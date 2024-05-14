const processMatrix = (matrix) => {
    const smallest = matrix.reduce((currentMin, row) => {
        const rowMin = Math.min(...row);
        return currentMin < rowMin ? currentMin : rowMin;
    }, Infinity);

    const updatedMatrix = matrix.map(row => row.map(value => value % 2 !== 0 ? value * smallest : value));
    return updatedMatrix;
}

// Testing

const inputMatrix = [
    [5, 3, 6],
    [7, 11, 2],
    [15, 9, 4]
];

const outputMatrix = processMatrix(inputMatrix);
console.log(outputMatrix);