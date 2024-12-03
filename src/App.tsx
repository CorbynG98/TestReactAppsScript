export function App() {
    const runGoogleFunction = (functionName: string) => {
        return new Promise((resolve, reject) => {
            // @ts-expect-error TS2304
            google.script.run
                .withSuccessHandler((response) => {
                    resolve(response);
                })
                .withFailureHandler((error) => {
                    reject(error);
                    // Handle the error (e.g., show an error message to the user)
                })[functionName];
        })
    }

    const handleClick = () => {
        runGoogleFunction("callServerFunction").then(res => {
            console.log(res)
        }).catch(err => {
            console.log("Error: " + err);
        })
    };

    return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={handleClick}>Call Server Function</button>
        </div>
    );
}
