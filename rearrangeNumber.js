// Rearrange the array in alternating positive and negative items
function rearrangeArray(array) {

    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
}
let array = [3, 23, -4, 23, -44, 22, 34, -9, 99];
rearrangeArray(array);
console.log(array);
