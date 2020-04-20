import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import myPic from './../assets/images/santiago.jpg';

class Introduction extends React.Component {
    render() {
        return (
            <Jumbotron fluid className='mb-0 text-center' style={{backgroundImage: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"}}>
            <Container className='text-light'>
              <Row>
                <Col xs={2} sm={0}></Col>
                <Col xs={8}>
                  <Image src={myPic} className="img-fluid" roundedCircle style={{border: 'solid 10px rgba(255, 255, 255, 0.3)'}}/>
                </Col>
                <Col xs={2} sm={0}></Col>
              </Row>
              <Row>
                <Col>
                  <h1 className="display-4">Santiago Serrato</h1>
                  <p>Software Developer based in Dallas, TX</p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        );
    }
}

export default Introduction;