async function generateNumbers() {
    // Get references to DOM elements
    const input = document.getElementById('numberInput');
    const result = document.getElementById('result');
    const count = parseInt(input.value);

    // Validate input is between 1-10
    if (isNaN(count) || count < 1 || count > 10) {
        result.innerHTML = 'Please enter a number between 1 and 10';
        return;
    }

    try {
        // Send POST request to backend
        const response = await fetch('http://localhost:3000/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ count: count })
        });

        // Parse the JSON response
        const data = await response.json();
        
        // Handle the response
        if (data.error) {
            result.innerHTML = data.error;
        } else {
            // Display the generated numbers, joined with commas
            result.innerHTML = `Generated numbers: ${data.numbers.join(', ')}`;
        }
    } catch (error) {
        // Handle any network or server errors
        result.innerHTML = 'Error connecting to server';
    }
}