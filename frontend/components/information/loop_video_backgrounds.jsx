'use strict';

import React, {Component} from 'react';

class Example extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: './app/assets/videos/Meenakshi.mp4'
        };
    }

    render () {
        return (
            <video id="background-video" autoPlay loop muted>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        );
    }
}

export default Example;
