// Call To Action

import React, {Component} from 'react';
import CV from '../../assets/cv.pdf'

class Cta extends Component {
    render() {
        return (
            <div className='cta'>
                <a href={CV} download className='btn'>Download CV</a>
                <a href="#contact" className='btn btn-primary'>Let's talk !</a>
            </div>
        );
    }
}

export default Cta;