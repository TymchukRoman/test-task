const countChildNodes = (node, depth = Infinity) => {
    if (depth < 1) return 0;

    let count = 0;

    node.childNodes.forEach(child => {
        if (child.nodeType === Node.ELEMENT_NODE) {
            count += 1 + countChildNodes(child, depth - 1);
        }
    });

    return count;
}

// Testing

const testingNode = document.getElementById('node');
console.log(countChildNodes(container, 2));    