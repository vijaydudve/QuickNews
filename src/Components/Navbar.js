import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">FastNews</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item"><Link class="nav-link active" to="/General">General</Link></li>
                                <li class="nav-item"><Link class="nav-link active" to="/Business">Business</Link></li>
                                <li class="nav-item"><Link class="nav-link active" to="/Entertainment">Entertainment</Link></li>
                                <li class="nav-item"><Link class="nav-link active" to="/Health">Health</Link></li>
                                <li class="nav-item"><Link class="nav-link active" to="/Science">Science</Link></li>
                                <li class="nav-item"><Link class="nav-link active" to="/Sports">Sports</Link></li>
                                <li class="nav-item"><Link class="nav-link active" to="/Technology">Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
