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
                                < li > < a href = "https://cics.unt.edu/content/cse-cyber-defense-team-qualifies-2013-southwest-regional-ccdc" > 2013 UNT CSE Cyber Defense Team Member < /a></li >
                                <li><a href="https://students.googleblog.com/2011/05/announcing-2011-google-hispanic-college.html">2011 Google Scholar</a></li>
                                <li>2009 Verizon Scholar</li>
                            </ul>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
        );
    }
}

export default Education;