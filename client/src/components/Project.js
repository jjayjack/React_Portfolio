import React from 'react'
import movieGo from '../images/movieGo.png';
import spotify from '../images/spotifyCommunity.PNG';
import notetaker from '../images/notetaker.PNG';
import weather from '../images/weatherApplication.PNG';
import fitness from '../images/fitnessTracker.PNG';
import employee from '../images/employeeDirectory.PNG';
import eatsaroundme from '../images/eatsAroundMe.png'

const Project = () => {
    return (
        <div className="container">
            <div className="header" id="work">
                <h3>Projects</h3>
            </div>
            <div className="content">
                <div className="card project-small" id="movie-go" >
                    <img src={movieGo} className="card-img-top project-img" alt="MovieGo"/>
                    <div className="card-body">
                        <h5 className="card-title">Movie GO!</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Coding Bootcamp: Project 1</h6>
                        <p className="card-text">First project with an amazing group first learning how to connect to APIs and create a simple UI for users.</p>
                        <a className="card-link image-header"  href="https://melanieuhrich.github.io/MovieGO/">Application</a>
                        <a className="card-link image-header" href="https://github.com/jjayjack/MovieGO">Github</a>
                    </div>
                </div>
                <div className="card project-small" id="spotify">
                <img src={spotify} className="card-img-top project-img" alt="Spotify"/>
                    <div className="card-body">
                        <h5 className="card-title">Spotify Community</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Coding Bootcamp: Project 2</h6>
                        <p className="card-text">Second project with an amazing group working to connect and read the Spotify API.</p>
                        <a className="card-link image-header"  href="https://spotify-community.herokuapp.com/">Application</a>
                        <a className="card-link image-header" href="https://github.com/jjayjack/spotify-community">Github</a>
                    </div>
                </div>
                <div className="card project-small" id="eatsAroundMe" >
                <img src={eatsaroundme} className="card-img-top project-img" alt="EatsAroundMe"/>
                    <div className="card-body">
                        <h5 className="card-title">Eats Around Me</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Coding Bootcamp: Project 3</h6>
                        <p className="card-text">Third project with an amazing group connecting Backend API (FourSquare) with Front-end component (React/React-Boostrap)</p>
                        <a className="image-header card-link"  href="https://foodiesunite.herokuapp.com/">Application</a>
                        <a className="image-header card-link" href="https://github.com/jjayjack/FoodiesUnite">Github</a>
                    </div>
                </div>  
                <div className="card project-small" id="note-taker" >
                <img src={notetaker} className="card-img-top project-img" alt="Notetaker"/>
                    <div className="card-body">
                        <h5 className="card-title">Notetaker</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Back-end development</h6>
                        <p className="card-text">Application that allows a user to create, read, update and delete notes. First experience handling CRUD operations.</p>
                        <a className="image-header card-link"  href="https://notetaker-nw-tril-jjay.herokuapp.com/">Application</a>
                        <a className="image-header card-link" href="https://github.com/jjayjack/Notetaker">Github</a>
                    </div>
                </div>
                <div className="card project-small" id="weather-dashboard" >
                <img src={weather} className="card-img-top project-img" alt="Weather Dashboard"/>
                    <div className="card-body">
                        <h5 className="card-title">Weather Application</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Learning and working with localStorage</h6>
                        <p className="card-text">Application that utilizes local storage and classes within JavaScript. During this process, I was pushed to creating a HTML through JavaScript in which the API call would be fired once the user typed within the input field and pressed search button. </p>
                        <a className="image-header card-link"  href="https://jjayjack.github.io/Weather-Dashboard/">Application</a>
                        <a className="image-header card-link" href="https://github.com/jjayjack/Weather-Dashboard">Github</a>
                    </div>
                </div>
                <div className="card project-small" id="fitnesstracker" >
                <img src={fitness} className="card-img-top project-img" alt="fitness tracker"/>
                    <div className="card-body">
                        <h5 className="card-title">Fitness Tracker</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Learning MongoDB</h6>
                        <p className="card-text">Application in which a user is able to navigate a UI to create a workout and update with new exercises. During this process, I got a better understanding of routes and properly connecting my front-end (which was already developed) and my back-end code.</p>
                        <a className="image-header card-link"  href="https://fittrackerappl.herokuapp.com/">Application</a>
                        <a className="image-header card-link" href="https://github.com/jjayjack/FitnessTracker">Github</a>
                    </div>
                </div>
                <div className="card project-small" id="employeeDirectory" >
                <img src={employee} className="card-img-top project-img" alt="employee directory"/>
                    <div className="card-body">
                        <h5 className="card-title">Employee Directory</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Further Reactjs Knowledge</h6>
                        <p className="card-text">Simple application that allowed me to navigate using Reactjs. This also started my understanding of connecting an open API and format data in a readable format for the viewer. One main issue that I had to overcome was the connection of components. </p>
                        <a className="image-header card-link"  href="https://hidden-dawn-84467.herokuapp.com/">Application</a>
                        <a className="image-header card-link" href="https://github.com/jjayjack/Employee_Directory">Github</a>
                    </div>
                </div>   

            </div>  
        </div>
    )
}

export default Project
