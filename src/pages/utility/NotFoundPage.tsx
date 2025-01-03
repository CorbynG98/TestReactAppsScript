import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function NotFoundPage() {
    const navigate = useNavigate();
    // Function to handle navigation based on query parameters
    const handleNavigation = (page) => {
        navigate(`?page=${page}`);
    };
    // Build UI
    return (
        <Container style={{ textAlign: 'center', paddingTop: '2rem', height: 'calc(100vh - 6rem)' }}>
            <FontAwesomeIcon icon={faSkullCrossbones} size='10x' color='white' />
            <p style={{ color: 'white', fontSize: '2.5rem', paddingTop: '1rem' }}>
                <strong>There doesn't seem to be anything here!</strong>
            </p>
            <p style={{ color: 'white' }}>This is a 404 (Not Found) page</p>
            <div
                style={{
                    display: 'flex',
                    paddingTop: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Button
                    variant='secondary'
                    onClick={() => window.history.back()}
                    style={{ height: '2.5rem', marginRight: '1rem' }}>
                    ← Return
                </Button>
                <Nav.Link onClick={() => handleNavigation('Home')}>
                    <Button variant='primary' style={{ height: '2.5rem' }}>
                        Go to home →
                    </Button>
                </Nav.Link>
            </div>
        </Container>
    );
}