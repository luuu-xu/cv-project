import { Component } from "react";
import Section from "./components/Section";
// import SectionEducation from "./components/SectionEducation";
// import SectionExperience from "./components/SectionExperience";
// import SectionPersonal from "./components/SectionPersonal";

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
      <div>
        <h1>CV</h1>
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
