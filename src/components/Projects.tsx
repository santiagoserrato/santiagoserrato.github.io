import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import todoListPreview from './../assets/images/todoList.svg';

const Projects: React.FunctionComponent = () => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const imageStyle = {
        filter: "brightness(100%)"
    };
    const imageHoverStyle = {
        filter: "brightness(90%)"
    };
    const buttonStyle = {
        display: "none"
    };
    const buttonHoverStyle = {
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "10px"
    };

    const toggleHoverState = () => {
        setIsHovering((previousState) => !previousState);
    }
    
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
                        <div style={{position: "relative", textAlign: "center"}} onMouseEnter={toggleHoverState} onMouseLeave={toggleHoverState}>
                            <a href="#demoComingSoon">
                                <Image src={todoListPreview} className="img-fluid px-4" style={isHovering ? imageHoverStyle : imageStyle} />
                                <Button variant="primary" style={isHovering ? buttonHoverStyle : buttonStyle}>Demo Coming Soon</Button>
                            </a>
                        </div>
                    </Col>
                    <Col className="py-2" md={6}>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>
    );
}

export default Projects;