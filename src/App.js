import { Component } from "react";
import SectionEducation from "./components/SectionEducation";
import SectionExperience from "./components/SectionExperience";
import SectionPersonal from "./components/SectionPersonal";

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
  render() {
    return (
      <div>
        <h1>CV</h1>
        <SectionPersonal />
        <SectionExperience />
        <SectionEducation />
      </div>
    );
  }
}

export default App;
