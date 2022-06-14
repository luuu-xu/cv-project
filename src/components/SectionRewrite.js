import { useState } from "react";
import uniqid from "uniqid";
import { InfoButton, InfoInput, InfoShow, SectionTitle } from "./SectionComponentsRewrite";

function SectionRewrite({ input }) {
  const initialInfosArray = [
    {
      ...input.infos,
      id: uniqid(),
      submitted: false
    }
  ];

  const [infosArray, setInfosArray] = useState(initialInfosArray);

  // const [infosArray, setInfosArray] = useState(
  //   [{
  //     ...input.infos,
  //     id: uniqid(),
  //     submitted: false
  //   }, ]
  // );

  const handleChange = (name, e) => {
    const id = e.target.id;
    setInfosArray(infosArray.map((infos) => {
      if (infos.id === id) {
        return {
          ...infos,
          [name]: e.target.value
        };
      } else {
        return infos;
      };
    }));
  };

  const onSubmitInfos = (e) => {
    e.preventDefault();
    const id = e.target.id;
    setInfosArray(infosArray.map((infos) => {
      if (infos.id === id) {
        return {
          ...infos,
          submitted: true
        };
      } else {
        return infos;
      };
    }));
  };

  const onEdit = (e) => {
    const id = e.target.id;
    setInfosArray(infosArray.map((infos) => {
      if (infos.id === id) {
        return {
          ...infos,
          submitted: false
        };
      } else {
        return infos;
      };
    }));
  };

  const onDelete = (e) => {
    const id = e.target.id;
    setInfosArray(infosArray.filter((infos) => {
      return infos.id !== id;
    }));
  };

  const onAdd = (e) => {
    setInfosArray(infosArray.concat(initialInfosArray));
  };

  return (
    <div className="section">
      <SectionTitle section={input.name} />
      <ul className="section-ul">
        {infosArray.map((infos) => {
          return (
            infos.submitted
            ?
            <SectionSubmitted
              key={infos.id}
              infos={infos}
              onEdit={onEdit}
              onDelete={onDelete}
              deleteButton={input.addButton}
            />
            :
            <SectionForm
              key={infos.id}
              infos={infos}
              onSubmit={onSubmitInfos}
              handleChange={handleChange}
            />
          );
        })}
      </ul>
      { input.addButton ? <InfoButton name='Add' onClick={onAdd}/> : null }
    </div>
  );
};

function SectionForm({ infos, onSubmit, handleChange }) {
  return (
    <form
      onSubmit={onSubmit}
      id={infos.id}
      className='section-form'
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
        };
      })}
      <InfoButton name='Submit' />
    </form>
  );
};

function SectionSubmitted({ infos, onEdit, onDelete, deleteButton }) {
  return (
    <>
      <ul className="info-show-ul">
        {Object.entries(infos).map(([key, value]) => {
          if (key !== 'id' && key !== 'submitted') {
            return (
              <InfoShow key={key} name={key} info={value} />
            );
          } else {
            return null;
          };
        })}
      </ul>
      <InfoButton
        name='Edit'
        id={infos.id}
        onClick={onEdit}
      />
      {deleteButton
      ?
      <InfoButton
        name='Delete'
        id={infos.id}
        onClick={onDelete}
      />
      :
      null
      }
    </>
  );
};

export default SectionRewrite;