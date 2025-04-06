function isMagic(arr) {
    const dimension = arr.length;
    const countX = row => row.filter(cell => cell === 'x').length; // Count 'x' in a row
    const targetCount = countX(arr[0]); // Count 'x' in the first row

    for (let i = 0; i < dimension; i++) {
        if (countX(arr[i]) !== targetCount) return false; // Check rows
    }
    for (let i = 0; i < dimension; i++) {
        if (countX(columns(arr, i)) !== targetCount) return false; // Check columns
    }
    if (countX(diagonal(arr)) !== targetCount) return false; // Check main diagonal
    if (countX(otherDiagonal(arr)) !== targetCount) return false; // Check anti-diagonal

    return true; // All checks passed
}

function diagonal(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][i]);
    }
    return result;
}

function otherDiagonal(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][arr.length - 1 - i]);
    }
    return result;
}

function columns(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][n]);
    }
    return result;
}
