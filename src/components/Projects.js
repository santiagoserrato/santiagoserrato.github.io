import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import todoListPreview from './../assets/images/todoList.svg';

class Projects extends React.Component {

    state = {
        isHovering: false
    };

    toggleIsHovering = () => {
        this.setState({
            isHovering: !this.state.isHovering
        });
    }

    render() {

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

        return (
            <Jumbotron id="projects" fluid className='mb-0' style={{backgroundColor: '#f1f1f1'}}>
                <Container>

                    <Row className="py-2">
                        <Col>
                            <h1>Projects</h1>
                        </Col>
                    </Row>
                    
                    <Row className="py-2">
                        <Col className="py-2">
                            <a href="#demoComingSoon">
                            <div style={{position: "relative", textAlign: "center"}} onMouseEnter={this.toggleIsHovering} onMouseLeave={this.toggleIsHovering}>
                                <Image src={todoListPreview} className="img-fluid px-4" style={this.state.isHovering ? imageHoverStyle : imageStyle} />
                                <Button variant="primary" style={this.state.isHovering ? buttonHoverStyle : buttonStyle}>Demo Coming Soon</Button>
                            </div>
                            </a>
                        </Col>
                    </Row>

                </Container>
            </Jumbotron>
        );
    }
}

export default Projects;