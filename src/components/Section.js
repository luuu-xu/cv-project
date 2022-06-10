import { Component } from "react";
import { SectionTitle, InfoInput, InfoButton, InfoShow } from "./SectionComponents";
import uniqid from "uniqid";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infosArray: [
        {
          ...this.props.input.infos,
          id: uniqid(),
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
      ...this.props.input.infos,
      id: uniqid(),
      submitted: false,
    };
    this.setState({
      infosArray: this.state.infosArray.concat(newInfos),
    });
  }

  render() {
    return (
      <div className="section">
        <SectionTitle section={this.props.input.name} />
        <ul className="section-ul">
          {this.state.infosArray.map((ele) => {
            return (
              ele.submitted
              ? 
              <SectionSubmitted
                key={ele.id}
                infos={ele}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
                deleteButton={this.props.input.addButton}
              />
              :
              <SectionForm
                key={ele.id}
                infos={ele}
                onSubmit={this.onSubmitInfos}
                handleChange={this.handleChange}
              />
            );
        })}
        </ul>
        {this.props.input.addButton ? <InfoButton name="Add" onClick={this.onAdd}/> : null }
      </div>
    );
  }
}

function SectionForm(props) {
  const { infos, onSubmit, handleChange } = props;

  return (
    <form
      onSubmit={onSubmit}
      id={infos.id}
      className="section-form"
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

function SectionSubmitted(props) {
  const { infos, onEdit, onDelete, deleteButton } = props;

  return (
    <div>
      <ul className="info-show-ul">
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
      {deleteButton
      ?
      <InfoButton
      name="Delete"
      id={infos.id}
      onClick={onDelete}
      />
      :
      null
      }
    </div>
  );
}

export default Section;