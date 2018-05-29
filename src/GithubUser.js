import React, { Component } from 'react'
import Github from './Github'

class GithubUser extends Component {
    constructor(props) {
        super(props)
        this.state ={
            user: {},
        }
        this.fetchUserData(this.props)
    }

componentWillReceiveProps(nextProps) {
    // this.fetchUserData()
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
        this.fetchUserData(nextProps)
    }
}

    fetchUserData = (props) => {
        fetch(`https://api.github.com/users/${props.match.params.username}`)
        .then(response => response.json())
        .then(user => this.setState({ user }))
        .catch(() => console.log('Well,shucks'))
    }
    render() {
        const { user } = this.state
        return (
            <div className="GithubUser">
                <img src={user.avatar_url} alt="" />
                <h2>{user.login}</h2>
                <h3>Followers: {user.followers}</h3>
                <h3>Following: {user.following}</h3>
                <h3>Location: {user.location}</h3>
                <a href={user.html_url} target="_blank">{user.login}'s profile</a>
            </div>
        )
    }
}

export default GithubUser