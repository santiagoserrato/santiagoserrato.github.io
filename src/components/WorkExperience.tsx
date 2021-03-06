import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import NrgLogo from './../assets/images/nrgLogoBlack.png';
import StreamLogo from './../assets/images/streamLogo.png';
import UntOfficeOfSustainabilityLogo from './../assets/images/untOfficeOfSustainabilityLogo.svg';

const WorkExperience: React.FunctionComponent = () => {
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
                        <Row>
                            <Col lg={8}><h5>Software Development Team Lead</h5></Col>
                            <Col lg={4} className='text-lg-right'><h6>Aug 2019 – Apr 2020</h6></Col>
                        </Row>

                        <ul>
                            <li>Supported and maintained Stream’s Customer Information System for Texas (CIS1)</li>
                            <li>Led a team of 2 developers; this consisted on planning iterations, estimating LOEs, holding weekly code review sessions, and mentoring team on best practices/standards to produce quality/maintainable code</li>
                            <li>Migrated 400k accounts from Stream to NRG’s system; this involved creating migration jobs utilizing Bash/PHP/MySQL and developing database views/stored procedures to retrieve historical customer data</li>
                            <li>Used Visual Studio Azure DevOps for iterations/sprints and followed agile/scrum methodologies</li>
                        </ul>
                    </Col>
                </Row>

                <Row className='py-2'>
                    <Col className='py-2' md={4}>
                        <Image src={StreamLogo} className="img-fluid px-4"/>
                    </Col>
                    <Col className='py-2' md={8}>

                        <h4>Stream Energy</h4>
                        <Row>
                            <Col lg={8}><h5>Software Development Team Lead</h5></Col>
                            <Col lg={4} className='text-lg-right'><h6>Mar 2018 - Aug 2019</h6></Col>
                        </Row>
                        <ul>
                            <li>Supported and maintained Stream’s Customer Information System for Texas (CIS1)</li>
                            <li>Led a team of 2 developers; this consisted on planning iterations, estimating LOEs, holding weekly code review sessions, and mentoring team on best practices/standards to produce quality/maintainable code</li>
                            <li>Led team on initiative to upgrade system PHP version from 5.2.x to 5.4.x</li>
                            <li>Developed REST and SOAP APIs to provide customer information to Interactive Voice Response (IVR) System using .NET/PHP</li>
                            <li>Added support for Free Nights and Free Weekends offerings; this consisted on updating CIS1 billing engine, product offering API, and web UI used by back office for telephonic enrollments/renewals</li>
                            <li>Assisted with data analysis using Azure SQL DB and MySQL</li>
                            <li>Used Visual Studio Azure DevOps for iterations/sprints and followed agile/scrum methodologies</li>
                        </ul>

                        <Row>
                            <Col lg={8}><h5>Senior Software Developer</h5></Col>
                            <Col lg={4} className='text-lg-right'><h6>Mar 2016 – Mar 2018</h6></Col>
                        </Row>
                        <ul>
                            <li>Supported and maintained Stream’s Customer Information System for Texas (CIS1)</li>
                            <li>Created web UI for back office to manage carbon offset offering using CSS/Javascript/jQuery</li>
                            <li>Integrated SmartyStreets REST API into CIS1 for address validation</li>
                            <li>Integrated SalesForce Marketing Cloud SOAP API into CIS1 to trigger/send emails</li>
                            <li>Integrated CyberGroup REST API into CIS1 to retrieve Weekly Energy Reports emailed to customers</li>
                            <li>Developed job to clean/redact sensitive information from customer data using PHP</li>
                        </ul>

                        <Row>
                            <Col lg={8}><h5>Software Developer II</h5></Col>
                            <Col lg={4} className='text-lg-right'><h6>Mar 2015 – Mar 2016</h6></Col>
                        </Row>
                        <ul>
                            <li>Supported and maintained Stream’s Customer Information System for Texas (CIS1)</li>
                            <li>Created web UI for call center to manage protections for various billing fees using CSS/Javascript/JQuery</li>
                            <li>Developed a nightly batch job for Wholesale Forecasting (Energy Buying Estimation) using PHP</li>
                            <li>Created job to assess customers leaving platform for early termination fee using PHP</li>
                        </ul>

                        <Row>
                            <Col lg={8}><h5>Software Developer I</h5></Col>
                            <Col lg={4} className='text-lg-right'><h6>Aug 2013 – Mar 2015</h6></Col>
                        </Row>
                        <ul>
                            <li>Supported and maintained Stream’s Customer Information System for Texas (CIS1)</li>
                            <li>Worked bugs and UI enhancements assigned by team lead</li>
                            <li>Created web UI for finance team to manage customers eligible to send to collections using CSS/Javascript/JQuery</li>
                        </ul>

                    </Col>
                </Row>
                
                <Row>
                    <Col md={4}>
                        <Image src={UntOfficeOfSustainabilityLogo} className="img-fluid"/>
                    </Col>
                    <Col md={8}>
                        <h4>University of North Texas - Office of Sustainability</h4>
                        <Row>
                            <Col lg={8}><h5>Software Developer Intern</h5></Col>
                            <Col lg={4} className='text-lg-right'><h6>May 2013 – Aug 2013</h6></Col>
                        </Row>
                        <ul>
                            <li>Converted the Office of Sustainability’s website from static HTML to Drupal content management system</li>
                            <li>Designed sustainability t-shirt, which was printed on 10,000+ shirts and given to students at the UNT Earth Day Campus Festival</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default WorkExperience;