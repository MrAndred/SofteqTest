function getSumOfIntInStrArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(+array[i])) {
            sum += (+array[i]);
        };
    }
    return sum;
}
document.write(getSumOfIntInStrArray(['1.1', 'a', '25', '13.1', 'a', 'b', '25']));