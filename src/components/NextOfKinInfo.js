import DetailsForm from "./DetailsForm";
const NextOfKinInfo = () => {
  const initialData = {
    fullName: "",
    relationship: "",
    email: "",
    phone: "",
  };
  const initialId = 3;
  const url = `http://localhost:3001/nextofkin/${initialId}`;
  const fields = [
    {
      id: 1,
      label: "Full Name",
      placeholder: "john Doe",
      type: "text",
      name: "fullName",
    },
    {
      id: 2,
      label: "Relationship",
      placeholder: "brother",
      type: "text",
      name: "relationship",
    },
    {
      id: 3,
      label: "Phone",
      placeholder: "0904567832",
      type: "text",
      name: "phone",
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
      legend="Next of kin Information"
      subLegend="Provide details for the person through whom you can be reached incase of unforeseen circumstances"
      fields={fields}
      url={url}
      initialData={initialData}
    />
  );
};

export default NextOfKinInfo;
