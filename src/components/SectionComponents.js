import { Component } from "react";

class SectionTitle extends Component {
  render() {
    return (
      <h3 className="section-title">
        {this.props.section}
      </h3>
    );
  }
}

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
          className="info-input"
        />
      </label>
    );
  }
}

class InfoButton extends Component {
  submitButton = () => {
    return (
      <button type="submit" className="btn">
        {this.props.name}
      </button>
    );
  }

  otherButton = () => {
    return (
      <button onClick={this.props.onClick} id={this.props.id} className="btn">
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
      <li className="info-show">
        {this.makeName(this.props.name)}: {this.props.info}
      </li>
    )
  }
}

export { SectionTitle, InfoInput, InfoButton, InfoShow };