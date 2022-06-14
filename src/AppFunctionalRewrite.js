import SectionRewrite from "./components/SectionRewrite";

function AppFunctionalRewrite() {
  return (
    <div className="App">
      <CV sectionData={CVSectionData} />
    </div>
  );
};

function CV({ sectionData }) {
  return (
    <div className="cv">
      <h1 className="cv-header">cv-project</h1>
      <>
        {Object.values(sectionData).map((section) => {
          return <SectionRewrite input={section} key={section.name} />;
        })}
      </>
    </div>
  );
};

const CVSectionData = {
  personal: {
    name: 'Personal Information',
    addButton: false,
    infos: {
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      EmailAddress: '',
    }
  },
  experience: {
    name: 'Experience',
      addButton: true,
      infos: {
        Position: '',
        Company: '',
        DateFrom: '',
        DateTo: '',
        Description: '',
      }
  },
  education: {
    name: 'Education',
      addButton: true,
      infos: {
        Subject: '',
        School: '',
        DateFrom: '',
        DateTo: '',
        Description: '',
      }
  }
};

export default AppFunctionalRewrite;