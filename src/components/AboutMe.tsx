import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import {ReactComponent as LinkedInIcon} from './../assets/images/linkedInIcon.svg';
import {ReactComponent as GitHubIcon} from './../assets/images/gitHubIcon.svg';
import {ReactComponent as EmailIcon} from './../assets/images/emailIcon.svg';
import resume from './../assets/resume.pdf';

const AboutMe: React.FunctionComponent = () => {
    return (
        <Jumbotron id="aboutMe" fluid className='mb-0' style={{backgroundColor: '#f1f1f1'}}>
            <Container>
                <h1>About Me</h1>
                <p>
                    Software Developer with strong mentoring, communication, documentation and organizational skills. Experience with PHP, Javascript, .Net, C/C++, Java, React, jQuery, Bootstrap, HTML/CSS, MySQL, SQL, JSON, XML, and Linux CLI. Interested in Full-Stack Developer opportunities.
                </p>
                <p>
                    This website was built to display side projects and my resume in a more aesthetically pleasing way. If you would like to view a more traditional version of my resume, <a href={resume} target="__blank">click here</a>. If you are interested in the code for this site, I used React and Bootstrap. The code is available <a href="https://github.com/santiagoserrato/santiagoserrato.github.io" target="__blank">here</a> in my GitHub account.
                </p>
                <div className="d-xs-block d-sm-block d-md-block d-lg-none pt-5">
                    <a href="https://www.linkedin.com/in/santiagoserrato/"target="__blank"><LinkedInIcon className="mr-4" fill='#333' width='3rem'height='3rem' /></a>
                    <a href="https://github.com/santiagoserrato"target="__blank"><GitHubIcon className="mr-4" fill='#333' width='3rem'height='3rem' /></a>
                    <a href="mailto:santiagoserrato@gmail.com"target="__blank"><EmailIcon className="mr-4" fill='#333' width='3rem'height='3rem' /></a>
                </div>
            </Container>
        </Jumbotron>
    );
}

export default AboutMe;