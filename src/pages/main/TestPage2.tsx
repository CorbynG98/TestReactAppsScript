import { Container } from "react-bootstrap";

export default function TestPage2() {
    return (
        <Container style={{ height: 'calc(100vh - 6rem)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ color: 'white' }}>Hello World! From Test Page 2</h1>
        </Container>
    );
}