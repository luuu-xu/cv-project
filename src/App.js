import { Component } from "react";
import Section from "./components/Section";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CV />
      </div>
    );
  }
}

class CV extends Component {
  personal = () => {
    return {
      name: 'Personal Information',
      addButton: false,
      infos: {
        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        EmailAddress: '',
      },
    };
  }

  experience = () => {
    return {
      name: 'Experience',
      addButton: true,
      infos: {
        Position: '',
        Company: '',
        DateFrom: '',
        DateTo: '',
        Description: '',
      },
    };
  }

  education = () => {
    return {
      name: 'Education',
      addButton: true,
      infos: {
        Subject: '',
        School: '',
        DateFrom: '',
        DateTo: '',
        Description: '',
      },
    };
  }

  render() {
    return (
      <div className="cv">
        <h1 className="cv-header">cv-project</h1>
        <Section input={this.personal()} />
        <Section input={this.experience()} />
        <Section input={this.education()} />
      </div>
    );
  }
}

export default App;
