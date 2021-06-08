import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navDir">
                <div className="container-fluid">
                    <Link to='/'>
                        <img src="https://img.icons8.com/pastel-glyph/64/ffffff/user-female--v1.png" alt="female" width="30" height="24" className="d-inline-block align-text-top" />
                        about me
                    </Link>
                    <Link to='/project'>
                        <img src="https://img.icons8.com/pastel-glyph/64/ffffff/briefcase--v3.png" alt="briefcase" width="30" height="24" className="d-inline-block align-text-top" />
                        project
                    </Link>
                    <Link to='/contact'>
                        <img src="https://img.icons8.com/pastel-glyph/64/ffffff/info--v4.png" alt="info" width="30" height="24" className="d-inline-block align-text-top" />
                        contact
                    </Link>
                    <Link to='/resume'>
                    <img src="https://img.icons8.com/pastel-glyph/64/ffffff/document--v3.png" alt="document" width="30" height="24" className="d-inline-block align-text-top" />
                        resume
                    </Link>
                    
                   
                    <h1 className="name">Jocelyn Jayjack</h1>
                </div>
            </nav>
            <div className="chevron jumbotron-fluid">
                <h2 className="subtitle">Come get to know me!</h2>
            </div>
        </div>
    )
}

export default Header