import DetailsForm from "./DetailsForm";
const PersonalStudentInfo = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    program: "",
    email: "",
    phone: "",
  };
  const initialId = 1;
  const url = `http://localhost:3001/students/${initialId}`;
  const fields = [
    {
      id: 1,
      label: "First Name",
      placeholder: "john",
      type: "text",
      name: "firstName",
    },
    {
      id: 2,
      label: "Last Name",
      placeholder: "Doe",
      type: "text",
      name: "lastName",
    },
    {
      id: 3,
      label: "Program",
      placeholder: "Bsc Computer Science",
      type: "text",
      name: "program",
    },
    {
      id: 4,
      label: "Email",
      placeholder: "someone@gmail.com",
      type: "email",
      name: "email",
    },
  ];
  return (
    <DetailsForm
      legend="Personal Information"
      subLegend="provide personal details and contact information"
      fields={fields}
      url={url}
      initialData={initialData}
    />
  );
};

export default PersonalStudentInfo;
