import { Container } from "react-bootstrap";

export default function HomePage() {
    const runGoogleFunction = (functionName: string, param: string = null) => {
        return new Promise((resolve, reject) => {
            // @ts-expect-error TS2304
            google.script.run
                .withSuccessHandler((response) => {
                    resolve(response);
                })
                .withFailureHandler((error) => {
                    reject(error);
                    // Handle the error (e.g., show an error message to the user)
                })[functionName](param);
        })
    }

    const clickNoParamButton = () => {
        runGoogleFunction("callServerFunction").then(res => {
            alert(res)
        }).catch(err => {
            alert("Error: " + err);
        })
    };

    const clickParamButton = () => {
        runGoogleFunction("callServerFunctionWithParam", "This is param").then(res => {
            alert(res)
        }).catch(err => {
            alert("Error: " + err);
        })
    };

    return (
        <Container style={{ height: 'calc(100vh - 6rem)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ color: 'white' }}>Hello World!</h1>
            <div style={{ display: 'flex', columnGap: '3rem' }}>
                <button onClick={clickNoParamButton}>Call No Param Function</button>
                <button onClick={clickParamButton}>Call Function With Param</button>
            </div>
        </Container>
    );
}