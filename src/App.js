import { Component } from "react";
import Section from "./components/Section";
import "./styles/App.css";
// import SectionEducation from "./previous/components/SectionEducation";
// import SectionExperience from "./previous/components/SectionExperience";
// import SectionPersonal from "./previous/components/SectionPersonal";

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
        {/* <SectionPersonal />
        <SectionExperience />
        <SectionEducation /> */}
        <Section input={this.personal()} />
        <Section input={this.experience()} />
        <Section input={this.education()} />
      </div>
    );
  }
}

export default App;
