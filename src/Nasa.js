import React, { Component } from 'react'
import './Nasa.css'
import {Route} from 'react-router-dom'

class Nasa extends Component{
    render() {
        return(
            <div className="Nasa">
                <img
                    src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png"
                    alt="NASA"
                    className="logo"
                />
                <Route exact path="/nasa" render={() => <h2>No rover selected.</h2>} />
                <Route path="/nasa/:rover" render={props => <h2>Rover: {props.match.params.rover}</h2>} />
            </div>
        )
    }
}

export default Nasa