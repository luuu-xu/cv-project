import { Component } from "react";
import { SectionTitle, InfoInput, InfoButton, InfoShow } from "../SectionComponents";
import uniqid from "uniqid";

class SectionEducation extends Component {
  constructor() {
    super();

    this.state = {
      infosArray: [
        {
          id: uniqid(),
          Subject: '',
          School: '',
          DateFrom: '',
          DateTo: '',
          Description: '',
          submitted: false,
        },
      ]
    };
  }

  handleChange = (name, e) => {
    const id = e.target.id;
    this.setState({
      infosArray: this.state.infosArray.map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            [name]: e.target.value,
          }
        } else {
          return ele;
        }
      })
    });
  }

  onSubmitInfos = (e) => {
    e.preventDefault();
    const id = e.target.id;
    this.setState({
      infosArray: this.state.infosArray.map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            submitted: true,
          }
        } else {
          return ele;
        }
      })
    });
  }

  onEdit = (e) => {
    const id = e.target.id;
    this.setState({
      infosArray: this.state.infosArray.map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            submitted: false,
          }
        } else {
          return ele;
        }
      })
    });
  }

  onDelete = (e) => {
    const id = e.target.id;
    this.setState({
      infosArray: this.state.infosArray.filter((ele) => {
        return ele.id !== id;
      })
    });
  }

  onAdd = (e) => {
    const newInfos = {
      id: uniqid(),
      Subject: '',
      School: '',
      DateFrom: '',
      DateTo: '',
      Description: '',
      submitted: false,
    };
    this.setState({
      infosArray: this.state.infosArray.concat(newInfos),
    });
  }

  render() {
    return (
      <div>
        <SectionTitle section="Experience" />
        <ul>
          {this.state.infosArray.map((ele) => {
            return (
              ele.submitted
              ? 
              <SectionEducationSubmitted
                key={ele.id}
                infos={ele}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
              />
              :
              <SectionEducationForm
                key={ele.id}
                infos={ele}
                onSubmit={this.onSubmitInfos}
                handleChange={this.handleChange}
              />
            );
        })}
        </ul>
        <InfoButton
          name="Add"
          onClick={this.onAdd}
        />
      </div>
    );
  }
}

function SectionEducationForm(props) {
  const { infos, onSubmit, handleChange } = props;

  return (
    <form
      onSubmit={onSubmit}
      id={infos.id}
    >
      {Object.entries(infos).map(([key, value]) => {
        if (key !== 'id' && key !== 'submitted') {
          return (
            <InfoInput
              key={key}
              name={key}
              value={value}
              id={infos.id}
              handleChange={(e) => handleChange(key, e)}
            />
          );
        } else {
          return null;
        }
      })}
      <InfoButton name="Submit" />
    </form>
  )
}

function SectionEducationSubmitted(props) {
  const { infos, onEdit, onDelete } = props;

  return (
    <div>
      <ul>
        {Object.entries(infos).map(([key, value]) => {
          if (key !== 'id' && key !== 'submitted') {
            return (
              <InfoShow key={key} name={key} info={value} />
            );
          } else {
            return null;
          }
        })}
      </ul>
      <InfoButton
        name="Edit"
        id={infos.id}
        onClick={onEdit}
      />
      <InfoButton
        name="Delete"
        id={infos.id}
        onClick={onDelete}
      />
    </div>
  );
}

export default SectionEducation;