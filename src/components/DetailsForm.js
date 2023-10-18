// Form.js
import React from "react";
import { useState, useEffect } from "react";
import FormTextInput from "./formTextInput";

const DetailsForm = ({ url, initialData, fields, legend, subLegend }) => {
  const [formData, setFormData] = useState(initialData);
  console.log(formData);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(url, {
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
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setFormData(data);
    };
    fetchData();
  }, [url]);
  return (
    <form className="p-3 border rounded-4">
      <div className="lh-sm mb-4">
        <span className="fw-bold fs-4">{legend}</span>
        <span className="text-muted fs-6 d-block">{subLegend}</span>
      </div>
      {fields.map((field) => (
        <FormTextInput
          key={field.id}
          labelName={field.label}
          inputPlaceholder={field.placeholder}
          inputType={field.type}
          inputValue={formData[field.name]}
          onChange={handleOnChange}
          inputName={field.name}
          inputReadOnly={isReadOnly}
        />
      ))}
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-primary  px-5"
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
            await handleSubmit();
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default DetailsForm;
