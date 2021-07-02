import React from 'react';

const About = () => {
    return (
        <div className="container about-me">
            <div className="header" id="about-me">
                <h3>About Me</h3>
            </div>
            <div className="content">
                <div id="portrait" alt="Portrait of Jocelyn"/>
                <p className="text-content">Hello there! I'm Jocelyn and this is my site that showcases
                    projects and activities that I have done while coding. I am a Full-stack web developer with a background 
                    in Nutrition and Kinesiology looking to navigate into a new role as 
                    a Front-end software engineer to create optimized user interface. 
                    From going from no-experience to earning a certificate in Full-Stack Web Development 
                    from Northwestern University Coding Boot Camp, I have found a driving interest in Javascript, 
                    React, Nodejs, and Axios. I am an organized, detail-orientated developer who enjoys learning 
                    new concepts and seeing a project complete while working with a team to better accomplish goals. </p>
            </div>    
        </div>
    )
}

export default About
