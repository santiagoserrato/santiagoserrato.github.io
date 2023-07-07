import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ToDoList from './Projects/ToDoList';

const Projects: React.FunctionComponent = () => {
    return (
        <Jumbotron id="projects" fluid className='mb-0' style={{backgroundColor: '#f1f1f1'}}>
            <Container>

                <Row className="py-2">
                    <Col>
                        <h1>Projects</h1>
                    </Col>
                </Row>
                
                <Row className="py-2">
                    <Col className="py-2" md={6}>
                        <ToDoList />
                    </Col>
                    <Col className="py-2" md={6}>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>
    );
}

export default Projects;