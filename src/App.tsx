export function App() {
    const handleClick = () => {
        // @ts-expect-error TS2304
        google.script.run
            .withSuccessHandler((response) => {
                console.log('Server response:', response);
                // Update the UI based on the response
            })
            .withFailureHandler((error) => {
                console.error('Error:', error);
                // Handle the error (e.g., show an error message to the user)
            })
            .callServerFunction(); // Assuming this is the name of your server function
    };

    return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={handleClick}>Call Server Function</button>
        </div>
    );
}
