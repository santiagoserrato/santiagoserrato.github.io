import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import UntLogo from './../assets/images/untLogo.png';

class Education extends React.Component {
    render() {
        return (
            <Jumbotron id="education" fluid className='mb-0' style={{backgroundColor: '#f1f1f1'}}>
                <Container>

                    <Row className="py-2">
                        <Col>
                            <h1>Education</h1>
                        </Col>
                    </Row>
                    
                    <Row className="py-2">
                        <Col className="py-2" md={4}>
                            <Image src={UntLogo} className="img-fluid px-4"/>
                        </Col>
                        <Col className="py-2" md={8}>
                            <h4>University of North Texas</h4>
                            <h6>Bachelor of Science, Computer Science, minor in Mathematics</h6>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Aenean at metus maximus, venenatis est in, venenatis nisi.</li>
                                <li>Donec accumsan metus consequat turpis tempor blandit.</li>
                                <li>Suspendisse quis nisl ac sem ullamcorper consequat.</li>
                            </ul>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
        );
    }
}

export default Education;