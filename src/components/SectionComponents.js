import { Component } from "react";

// class Section extends Component {
//   render() {
//     return (
//       <div>
//         <SectionTitle section={this.props.section}/>
//         <SectionForm section={this.props.section}/>
//       </div>
//     );
//   }
// }

class SectionTitle extends Component {
  render() {
    return (
      <h3>
        {this.props.section}
      </h3>
    );
  }
}

// class SectionForm extends Component {
//   sectionFormPersonal = () => {
//     return (
//       <form>
//         <InfoInput name="FirstName" />
//         <InfoInput name="LastName" />
//         <InfoInput name="PhoneNumber" />
//         <InfoInput name="EmailAddress" />
//         <InfoButton name="Submit" />
//       </form>
//     );
//   }

//   sectionFormExperience = () => {
//     return (
//       <form>
//       <InfoInput name="Position" />
//       <InfoInput name="Company" />
//       <InfoInput name="DateFrom" />
//       <InfoInput name="DateTo" />
//       <InfoInput name="Description" />
//       <InfoButton name="Submit" />
//     </form>
//     );
//   }

//   sectionFormEducation = () => {
//     return (
//       <form>
//         <InfoInput name="Field" />
//         <InfoInput name="School" />
//         <InfoInput name="DateFrom" />
//         <InfoInput name="DateTo" />
//         <InfoInput name="Description" />
//         <InfoButton name="Submit" />
//     </form>
//     );
//   }

//   render() {
//     if (this.props.section === "Experience") {
//       return this.sectionFormExperience();
//     } else if (this.props.section === "Personal Information") {
//       return this.sectionFormPersonal();
//     } else if (this.props.section === "Education") {
//       return this.sectionFormEducation();
//     }
//   }
// }

class InfoInput extends Component {
  makePlaceholder = (name) => {
    return name.split(/(?=[A-Z])/).join(' ');
  }

  render() {
    return (
      <label>
        <input
          id={this.props.id}
          name={this.props.name + "Input"}
          type="text"
          placeholder={this.makePlaceholder(this.props.name)}
          onChange={this.props.handleChange}
          value={this.props.value}
        />
      </label>
    );
  }
}

class InfoButton extends Component {
  submitButton = () => {
    return (
      <button type="submit">
        {this.props.name}
      </button>
    );
  }

  otherButton = () => {
    return (
      <button onClick={this.props.onClick} id={this.props.id}>
        {this.props.name}
      </button>
    );
  }

  render() {
    if (this.props.name === "Submit") {
      return this.submitButton();
    } else {
      return this.otherButton();
    }
  }
}

class InfoShow extends Component {
  makeName = (name) => {
    return name.split(/(?=[A-Z])/).join(' ');
  }

  render() {
    return (
      <li>
        {this.makeName(this.props.name)}: {this.props.info}
      </li>
    )
  }
}

export { SectionTitle, InfoInput, InfoButton, InfoShow };