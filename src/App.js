import React, {Component} from 'react';
import './style.css';
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
            sentence: '',
            polarity: undefined
        };
    };

    analyzeSentence() {
        fetch('http://localhost:8080/sentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({sentence: this.textField.getValue()})
        })
            .then(response => response.json())
            .then(data => this.setState(data));
    }

    onEnterPress = e => {
        if (e.key === 'Enter') {
            this.analyzeSentence();
        }
    };

    render() {
        const polarityComponent = this.state.polarity !== undefined ?
            <Polarity sentence={this.state.sentence} polarity={this.state.polarity}/> :
            null;

        return (
<div id="topmain">
<div id="navigation" class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand smothscroll" href="#home"><b>Benya</b></a>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#home" class="smothscroll">Home</a></li>
        <li><a href="#desc" class="smothscroll">Micro Service</a></li>
        <li><a href="#contact" class="smothscroll">Spring Hibernate</a></li>
      </ul>
    </div>

  </div>
</div>

<section id="home" name="home">
  <div id="headerwrap">
    <div class="container">
      <div class="row centered">
        <div class="col-lg-12">
          <h1>Welcome To <b>Benya Portfolio</b></h1>
          <h3>Architecture Diagram</h3>
        </div>

        <div class="col-lg-2">
          <h5>Spring Hibernate</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <img class="hidden-xs hidden-sm hidden-md" src="img/arrow1.png"/>
        </div>
        <div class="col-lg-8">
          <img class="img-responsive" src="img/arch.png" alt=""/>
        </div>
        <div class="col-lg-2">
          <img class="hidden-xs hidden-sm hidden-md" src="img/arrow2.png"/>
          <h5>Micro Services</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
    </div>

  </div>

</section>


<section id="desc" name="desc">

  <div id="features">
    <div class="container">
      <div class="row">
        <h1 class="centered">Micro Services</h1>
        <div class="col-lg-6 centered">
          <img class="centered" src="img/intro03.png" alt=""/>
        </div>

        <div class="col-lg-6">
          <h3>Flipping the sentence.. talk more about technology used here</h3>

          <div class="accordion ac" id="accordion2">




<form class="contact-form php-mail-form" role="form" action="contactform/contactform.php" method="POST">

<div class="form-group">
  <label for="contact-name">Your Input Sentence</label>
  <input type="name" name="name" class="form-control" id="contact-name" placeholder="Enter your sentence here.." data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
  <div class="validate"></div>
</div>





<div class="loading"></div>
<div class="error-message"></div>
<div class="sent-message">Your message has been sent. Thank you!</div>

<div class="form-send">
  <button type="submit" class="btn btn-large">Reverse Sentence</button>
</div>

</form>



          </div>

        </div>
      </div>
    </div>

  </div>

</section>

<section id="contact" name="contact">
  <div id="footerwrap">
    <div class="container">
      <div class="col-lg-5">
        <h3>Current Records in MySQL Database</h3>
            {polarityComponent}
      </div>

      <div class="col-lg-7">
        <h3>Add Name and Hobby (Spring Hibernate)</h3>
        <form class="contact-form php-mail-form" role="form" onSubmit={this.analyzeSentence.bind(this)}>

          <div class="form-group">
            <label for="contact-name">Your Name</label>
            <input type="name" name="name" class="form-control" id="contact-name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
            <div class="validate"></div>
          </div>
          <div class="form-group">
            <label for="contact-email">Your Hobby</label>
            <input ref={ref => this.textField = ref} onKeyUp={this.onEnterPress.bind(this)} type="hobby" name="hobby" class="form-control" id="contact-email" placeholder="Your Hobby" data-rule="email" data-msg="Please enter a valid email"/>
            <div class="validate"></div>
          </div>

          <div class="loading"></div>
          <div class="error-message"></div>
          <div class="sent-message">Your message has been sent. Thank you!</div>

          <div class="form-send">
            <button  label="Add Entry" class="btn btn-large" onClick={this.analyzeSentence.bind(this)}/>
          </div>

        </form>

      </div>
    </div>
  </div>
</section>
</div>
        );
    }
}

export default App;
