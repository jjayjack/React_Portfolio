import React from 'react'

const Contact = () => {
    return (
        <div className="container">
            <div className="subtitle" id="contact">Contact</div>
            <div className="work list-group">
                <a href="mailto:jocelynjayjack@gmail.com" className="list-group-item list-group-item-action listItem" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Email</h5>
                        <small>jocelynjayjack@gmail.com</small>
                    </div>
                </a>
                <a href="http://github.com/jjayjack" className="list-group-item list-group-item-action listItem" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">GitHub</h5>
                        <small>jjayjack</small>
                    </div>
                </a>
                <a href="http://www.linkedin.com/in/jocelyn-jayjack-b4b63161" className="list-group-item listItem list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">LinkedIn</h5>
                        <small>Jocelyn Jayjack</small>
                    </div>
                </a>
                <a href="tel:+2197655302" className="list-group-item list-group-item-action listItem" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Phone</h5>
                        <small>Jocelyn Jayjack</small>
                    </div>
                </a>
                
            </div>
        </div>
    )
}

export default Contact
