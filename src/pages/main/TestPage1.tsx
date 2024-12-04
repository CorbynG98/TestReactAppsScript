import { Container } from "react-bootstrap";

export default function TestPage1() {
    return (
        <Container style={{ height: 'calc(100vh - 6rem)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ color: 'white' }}>Hello World! From Test Page 1</h1>
        </Container>
    );
}
