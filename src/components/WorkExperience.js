import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import NrgLogo from './../assets/images/nrgLogoBlack.png';
import StreamLogo from './../assets/images/streamLogo.png';
import UntOfficeOfSustainabilityLogo from './../assets/images/untOfficeOfSustainabilityLogo.svg';

class WorkExperience extends React.Component {
    render() {
        return (
            <Jumbotron id="experience" fluid className='mb-0'>
                <Container>
                    <Row className="py-2">
                        <Col>
                            <h1>Work Experience</h1>
                        </Col>
                    </Row>

                    <Row className='py-2'>
                        <Col className='py-2' md={4}>
                            <Image src={NrgLogo} className="img-fluid px-4"/>
                        </Col>
                        <Col className='py-2' md={8}>
                            <h4>NRG Energy</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue augue vel urna blandit, at ornare lorem viverra. Morbi sollicitudin metus dui, vitae ornare diam maximus in. Integer eget turpis id diam rutrum luctus. Fusce dolor lorem, mollis in ipsum vel, lacinia maximus libero. Morbi euismod vestibulum dignissim. Curabitur lectus nunc, eleifend elementum nunc id, ornare consequat risus. Fusce id massa sit amet nibh imperdiet porttitor. Ut sit amet rutrum magna, id convallis neque.
                            </p>

                            <h5>Software Development Team Lead</h5>
                            <h6>Addison, Texas, United States, March 2018 – Present</h6>
                            <ul>
                                <li>Nunc mollis sapien condimentum euismod auctor.</li>
                                <li>Sed ut sapien tincidunt, pretium arcu vel, hendrerit urna.</li>
                                <li>Nulla id sapien interdum nulla dictum tristique.</li>
                                <li>Proin tincidunt turpis eget condimentum sollicitudin.</li>
                                <li>Sed rhoncus velit sed orci ullamcorper luctus.</li>
                            </ul>
                        </Col>
                    </Row>

                    <Row className='py-2'>
                        <Col className='py-2' md={4}>
                            <Image src={StreamLogo} className="img-fluid px-4"/>
                        </Col>
                        <Col className='py-2' md={8}>
                            <h4>Stream Energy</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue augue vel urna blandit, at ornare lorem viverra. Morbi sollicitudin metus dui, vitae ornare diam maximus in. Integer eget turpis id diam rutrum luctus. Fusce dolor lorem, mollis in ipsum vel, lacinia maximus libero. Morbi euismod vestibulum dignissim. Curabitur lectus nunc, eleifend elementum nunc id, ornare consequat risus. Fusce id massa sit amet nibh imperdiet porttitor. Ut sit amet rutrum magna, id convallis neque.
                            </p>

                            <h5>Senior Software Developer</h5>
                            <h6>Dallas, Texas, United States, March 2016 – March 2018</h6>
                            <ul>
                                <li>Nunc mollis sapien condimentum euismod auctor.</li>
                                <li>Sed ut sapien tincidunt, pretium arcu vel, hendrerit urna.</li>
                                <li>Nulla id sapien interdum nulla dictum tristique.</li>
                                <li>Proin tincidunt turpis eget condimentum sollicitudin.</li>
                                <li>Sed rhoncus velit sed orci ullamcorper luctus.</li>
                            </ul>


                            <h5>Software Developer II</h5>
                            <h6>Dallas, Texas, United States, March 2015 – March 2016</h6>
                            <ul>
                                <li>Nunc mollis sapien condimentum euismod auctor.</li>
                                <li>Sed ut sapien tincidunt, pretium arcu vel, hendrerit urna.</li>
                                <li>Nulla id sapien interdum nulla dictum tristique.</li>
                                <li>Proin tincidunt turpis eget condimentum sollicitudin.</li>
                                <li>Sed rhoncus velit sed orci ullamcorper luctus.</li>
                            </ul>


                            <h5>Software Developer I</h5>
                            <h6>Dallas, Texas, United States, Aug 2013 – March 2015</h6>
                            <ul>
                                <li>Nunc mollis sapien condimentum euismod auctor.</li>
                                <li>Sed ut sapien tincidunt, pretium arcu vel, hendrerit urna.</li>
                                <li>Nulla id sapien interdum nulla dictum tristique.</li>
                            </ul>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md={4}>
                            <Image src={UntOfficeOfSustainabilityLogo} className="img-fluid"/>
                        </Col>
                        <Col md={8}>
                            <h4>University of North Texas - Office of Sustainability</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue augue vel urna blandit, at ornare lorem viverra. Morbi sollicitudin metus dui, vitae ornare diam maximus in. Integer eget turpis id diam rutrum luctus. Fusce dolor lorem, mollis in ipsum vel, lacinia maximus libero. Morbi euismod vestibulum dignissim. Curabitur lectus nunc, eleifend elementum nunc id, ornare consequat risus. Fusce id massa sit amet nibh imperdiet porttitor. Ut sit amet rutrum magna, id convallis neque.
                            </p>

                            <h5>Software Developer Intern</h5>
                            <h6>Denton, Texas, United States, May 2013 – Aug 2013</h6>
                            <ul>
                                <li>Nunc mollis sapien condimentum euismod auctor.</li>
                                <li>Sed ut sapien tincidunt, pretium arcu vel, hendrerit urna.</li>
                                <li>Nulla id sapien interdum nulla dictum tristique.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default WorkExperience;