import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Polarity extends Component {

    propTypes = {
        polarity: PropTypes.number.isRequired
    };

    render() {
        const textColor = {
            backgroundColor: '#dddddd',
            padding: '15px'
        };

        return <div style={textColor}>Here is all data in the database: <br></br>{this.props.polarity} </div>
    }
}

export default Polarity;
