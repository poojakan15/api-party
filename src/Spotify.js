import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SpotifySong from './SpotifySong'
import './Spotify.css'

class Spotify extends Component {
    state = {
        name: '',
    }

    handleChange = (ev) => {
        this.setState({ name: ev.target.value }) 
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/spotify/${this.state.name}`)
        this.setState({ name: '' })
    }
    render() {
        return (
            <div className="Spotify">
            <img
                className="logo"
                src="http://media.idownloadblog.com/wp-content/uploads/2016/10/latest.jpg"
                alt="Spotify"
            />
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Look up Spotify song</button>
                </div>
            </form>
            <Route path="/spotify:username" component={SpotifySong} />
            <Route exact path="/spotify" render={() => <h3>Please enter song name to search on Spotify</h3>} />
        </div>
        )
    }
}

export default Spotify