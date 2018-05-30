import React, { Component } from 'react'
import Spotify from './Spotify'

class SpotifySong extends Component {
    constructor(props) {
        super(props)
        this.state ={
            user: {},
        }
        this.fetchUserData(this.props)
    }
componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
        this.fetchUserData(nextProps)
    }
}

    fetchUserData = (props) => {
        fetch(`https://api.spotify.com/v1/tracks${props.match.params.name}`)
        .then(response => response.json())
        .then(user => this.setState({ user }))
        .catch(() => console.log('Well,shucks'))
    }
    render() {
        const { user } = this.state
        return (
            <div className="SpotifySong">
                
            </div>
        )
    }
}

export default SpotifySong