function SectionTitle({ section }) {
  return (
    <h3 className="section-title">
      {section}
    </h3>
  );
};

function InfoInput({ id, name, handleChange, value }) {
  const makePlaceholder = (name) => {
    return name.split(/(?=[A-Z])/).join(' ');
  };

  return (
    <label>
      <input
        id={id}
        name={name + "Input"}
        type="text"
        placeholder={makePlaceholder(name)}
        onChange={handleChange}
        value={value}
        className="info-input"
      />
    </label>
  );
};

function InfoButton({ name, onClick, id }) {
  const submitButton = () => {
    return (
      <button type="submit" className="btn">
        {name}
      </button>
    );
  };

  const otherButton = () => {
    return (
      <button
        onClick={onClick}
        id={id}
        className="btn"
      >
        {name}
      </button>
    );
  };

  if (name === 'Submit') {
    return submitButton();
  } else {
    return otherButton();
  };
};

function InfoShow({ name, info }) {
  const makeName = (name) => {
    return name.split(/(?=[A-Z])/).join(' ');
  };

  return (
    <li className="info-show">
      {makeName(name)}: {info}
    </li>
  );
};

export { SectionTitle, InfoInput, InfoButton, InfoShow };