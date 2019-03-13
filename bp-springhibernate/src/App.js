import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Polarity from "./components/Polarity";

const style = {
    marginLeft: 12,
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            hobby: '',
	    all_entries: ''
        };
	this.handleChange = this.handleChange.bind(this);
    };

    analyzeSentence() {
        fetch('http://3.17.220.167:9090/add_entry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: this.state.username, hobby: this.state.hobby})
        })
            .then(response => response.json())
            .then(data => this.setState(data));
    }
  handleChange (event) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [event.target.name]: event.target.value });
  }
    onEnterPress = e => {
        if (e.key === 'Enter') {
            this.analyzeSentence();
        }
    };

    render() {
        const polarityComponent = this.state.all_entries !== undefined ?
            <Polarity polarity={this.state.all_entries}/> :
            null;

        return (
            <MuiThemeProvider>
                <div className="centerize">
                    <Paper zDepth={1} className="content">
                        <h2>Add new entry</h2>
        <input type="text" name="username" onChange={this.handleChange} />
        
        <input type="text" name="hobby" onChange={this.handleChange} />
                        <RaisedButton  label="Send" style={style} onClick={this.analyzeSentence.bind(this)}/>
                        {polarityComponent}
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
