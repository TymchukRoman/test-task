function* chunkArray(array, pageSize) {
    for (let i = 0; i < array.length; i += pageSize) {
        yield array.slice(i, i + pageSize);
    }
}

// Testing

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());