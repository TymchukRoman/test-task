const reliableMultiply = (a, b) => {
    while (true) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (e instanceof ErrorException) {
                throw e;
            }
        }
    }
}

//Testing

function NotificationException() { }
function ErrorException() { }
function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException()
    } else {
        throw new NotificationException()
    }
}

console.log(reliableMultiply(8, 8));