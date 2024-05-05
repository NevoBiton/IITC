

function sortArray(array) {
    let tempdArr = array.slice();
    let sortedArray = [];

    while (tempdArr.length > 0) {
        let minIndex = 0;
        let minValue = tempdArr[0];

        for (let i = 1; i < tempdArr.length; i++) {
            if (tempdArr[i] < minValue) {
                minValue = tempdArr[i];
                minIndex = i;
            }
        }

        sortedArray.push(minValue);
        tempdArr.splice(minIndex, 1);
    }

    return sortedArray;
}

let numArray = [2, 4, 1, 9, 6, 3, 2];