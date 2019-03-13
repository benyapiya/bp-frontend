import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Polarity extends Component {

    propTypes = {
        sentence: PropTypes.string.isRequired,
        polarity: PropTypes.number.isRequired
    };

    render() {
        const textColor = {
            backgroundColor: '#dddddd',
            padding: '15px'
        };

        return <div style={textColor}><br></br>This is reversed sentence: {this.props.polarity} </div>
    }
}

export default Polarity;
