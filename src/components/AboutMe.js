import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import {ReactComponent as LinkedInIcon} from './../assets/images/linkedInIcon.svg';
import {ReactComponent as GitHubIcon} from './../assets/images/gitHubIcon.svg';
import {ReactComponent as EmailIcon} from './../assets/images/emailIcon.svg';

class AboutMe extends React.Component {
    render() {
        return (
            <Jumbotron id="aboutMe" fluid className='mb-0' style={{backgroundColor: '#f1f1f1'}}>
                <Container>
                    <h1>About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue augue vel urna blandit, at ornare lorem viverra. Morbi sollicitudin metus dui, vitae ornare diam maximus in. Integer eget turpis id diam rutrum luctus. Fusce dolor lorem, mollis in ipsum vel, lacinia maximus libero. Morbi euismod vestibulum dignissim. Curabitur lectus nunc, eleifend elementum nunc id, ornare consequat risus. Fusce id massa sit amet nibh imperdiet porttitor. Ut sit amet rutrum magna, id convallis neque.
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
}

export default AboutMe;