import React, { Component } from 'react'
// import './RoverInfo.css'

const photoDates = {
    curiosity: '2015-05-30',
    opportunity: '2015-04-30',
    spirit: '2004-01-10',
}

class RoverInfo extends Component {
    state ={
        rover: {}
    }

    componentWillMount = () => {
        this.fetchRoverData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location;
        if(locationChanged) {
            this.fetchRoverData(nextProps)
        }
    }

    fetchRoverData(props) {

    }

}