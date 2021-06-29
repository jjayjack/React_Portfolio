import React from 'react';
import { Switch, Route} from 'react-router-dom';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Homepage = () => {
    return (
        <main>
            <Switch>
                <Route exact path = '/' component={About}/>
                <Route exact path = '/project' component={Project} />
                <Route exact path = '/contact' component={Contact} />
                <Route path ='/resume' component={() => {
                    window.open("https://drive.google.com/file/d/1Ry6U-iYwmH2KNCoC8_nTcfsQgElDAzqP/view?usp=sharing");
                    return null}}/>
            </Switch>
        </main>
    )
}

export default Homepage
