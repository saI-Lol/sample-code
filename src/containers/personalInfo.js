import FormTextInput from "../components/formTextInput";
import { useState, useEffect } from "react";
const PersonalInfo = () => {
  const studentId = 3;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    program: "",
    email: "",
    phone: "",
  });
  const [isReadOnly, setIsReadOnly] = useState(true);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Request was successful.");
      } else {
        console.error("Error occured:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  useEffect(() => {
    const fetchStudentData = async (id) => {
      const response = await fetch(`http://localhost:3001/students/${id}`);
      const studentProfileData = await response.json();
      setFormData(studentProfileData);
    };
    fetchStudentData(studentId);
  }, [studentId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <form className="p-3">
            <div className="lh-sm mb-4">
              <span className="fw-bold fs-4">Peronal Information</span>
              <span className="text-muted fs-6 d-block">
                provide personal details and contact information
              </span>
            </div>
            <FormTextInput
              labelName="First Name"
              inputPlaceholder="john"
              inputType="text"
              inputValue={formData.firstName}
              onChange={handleOnchange}
              inputName={"firstName"}
              inputReadOnly={isReadOnly}
            />
            <FormTextInput
              labelName="Last Name"
              inputPlaceholder="Doe"
              inputType="text"
              inputValue={formData.lastName}
              onChange={handleOnchange}
              inputName={"lastName"}
              inputReadOnly={isReadOnly}
            />
            <FormTextInput
              labelName="Program"
              inputPlaceholder="Bsc Computer Science"
              inputType="text"
              inputValue={formData.program}
              onChange={handleOnchange}
              inputName={"program"}
              inputReadOnly={isReadOnly}
            />
            <FormTextInput
              labelName="Email"
              inputPlaceholder="someone@example.com"
              inputType="email"
              inputValue={formData.email}
              onChange={handleOnchange}
              inputName={"email"}
              inputReadOnly={isReadOnly}
            />
            <FormTextInput
              labelName="Phone"
              inputPlaceholder="08012345678"
              inputType="text"
              inputValue={formData.phone}
              onChange={handleOnchange}
              inputName={"phone"}
              inputReadOnly={isReadOnly}
            />
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-outline-primary  px-5 "
                onClick={(e) => {
                  e.preventDefault();
                  setIsReadOnly(false);
                  console.log(formData);
                }}
              >
                Edit
              </button>
              <button
                className="btn px-5 btn-primary text-light"
                onClick={async (e) => {
                  e.preventDefault();
                  setIsReadOnly(true);
                  await handleSubmit(studentId);
                }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
