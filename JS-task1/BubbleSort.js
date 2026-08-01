let arr = [5, 3, 6, 8, 1, 4];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

console.log(bubbleSort(arr));