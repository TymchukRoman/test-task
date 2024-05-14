const getBase64FromUrl = (url) => {
    return import('node-fetch')
        .then(({ default: fetch }) => fetch(url))
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.buffer();
        })
        .then(buffer => 'data:image/png;base64,' + buffer.toString('base64'))
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

// Testing

getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
    .then(console.log)
    .catch(console.error);