import { Component } from "react";
import { SectionTitle, InfoInput, InfoButton, InfoShow } from "../SectionComponents";

class SectionPersonal extends Component {
  constructor() {
    super();

    this.state = {
      infos: {
        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        EmailAddress: '',
      },
      submitted: false,
    }
  }

  handleChange = (name, e) => {
    this.setState(prevState => ({
      infos: {
        ...prevState.infos,
        [name]: e.target.value,
      }
    }));
  }

  onSubmitInfos = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
    });
  }

  onEdit = (e) => {
    this.setState({
      submitted: false,
    });
  }

  render() {
    if (!this.state.submitted) {
      return (
        <div>
          <SectionTitle section="Personal Information" />
          <form onSubmit={this.onSubmitInfos}>
            <InfoInput 
              name="FirstName" 
              handleChange={(e) => this.handleChange('FirstName', e)} 
              value={this.state.infos.FirstName}
            />
            <InfoInput 
              name="LastName"
              handleChange={(e) => this.handleChange('LastName', e)} 
              value={this.state.infos.LastName}
            />
            <InfoInput
              name="PhoneNumber"
              handleChange={(e) => this.handleChange('PhoneNumber', e)}
              value={this.state.infos.PhoneNumber}
            />
            <InfoInput
              name="EmailAddress"
              handleChange={(e) => this.handleChange('EmailAddress', e)}
              value={this.state.infos.EmailAddress}
            />
            <InfoButton name="Submit" />
         </form>
        </div>
      );
    } else {
      return (
        <SectionPersonalSubmitted
          infos={this.state.infos}
          onEdit={this.onEdit}
        />
      );
    }
  }
}

class SectionPersonalSubmitted extends Component {
  render() {
    return (
      <div>
        <SectionTitle section="Personal Information" />
        <ul>
          {Object.entries(this.props.infos).map(([key, value]) => {
            return <InfoShow key={key} name={key} info={value} />
          })}
        </ul>
        <InfoButton name="Edit" onClick={this.props.onEdit}/>
      </div>
    )
  }
}

export default SectionPersonal;