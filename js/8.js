String.prototype.removeDuplicate = function () {
    const words = this.split(' ');
    const uniqueWords = [...new Set(words)];
    return uniqueWords.join(' ');
}

// Testing

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
console.log(x.removeDuplicate());