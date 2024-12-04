import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

function NavBar() {
    return (
        <Navbar variant='dark' sticky='top' className='navSemiBackground' style={{ height: '6rem', padding: 0 }}>
            <Container style={{ paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>
                <Container className='p-0 m-0'>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                        <Col md='2'>
                            <Navbar.Brand
                                href='/Home'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                }}>
                                <img
                                    alt=''
                                    src='https://storage.googleapis.com/public_images_us/icon-512x512.png'
                                    width='40'
                                    height='40'
                                    className='d-inline-block align-top'
                                    style={{ borderRadius: '15%' }}
                                />{' '}
                                <strong style={{ marginLeft: '1rem' }}>Apps Script Test</strong>
                            </Navbar.Brand>
                        </Col>
                        <Col md='6'></Col>
                        <Col md='4'>
                            <div style={{ display: 'flex', columnGap: '1rem' }}>
                                <Nav.Link style={{ color: 'white' }} as={Link} to='/Test1'>
                                    Test1
                                </Nav.Link>
                                <Nav.Link style={{ color: 'white' }} as={Link} to='/Test2'>
                                    Test2
                                </Nav.Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Navbar>
    );
}

export default NavBar;