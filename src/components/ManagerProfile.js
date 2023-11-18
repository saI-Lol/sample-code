import { useState } from "react";
const ManagerProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const email = "harrymaguire@gmail.com"

  const changePassword = () => {
    console.log("change password");
  };

  const updateProfilePic = () => {
    console.log("update profile pic");
  };

  const saveProfile = () => {
    console.log(formData);
  };
  return (
    <div className="bg-light p-5">
      <div className="border-0 rounded-3 bg-white p-2">
        <div className="fw-medium">Email</div>
        <div className="p-2 border-0 bg-light fw-light  rounded mt-1">{email}</div>
      </div>
      <form className="border-0 rounded-3 bg-white p-2 mt-3">
        <div className="fw-medium">Name and contact</div>
        <input
          type="text"
          className="form-control mt-2 p-2 border-0 bg-light rounded fw-light "
          value={formData.firstName}
          placeholder="Enter first name"
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control mt-2 p-2 border-0 bg-light rounded fw-light "
          value={formData.lastName}
          placeholder="Enter last name"
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control mt-2 p-2 border-0 bg-light rounded fw-light "
          value={formData.phoneNumber}
          placeholder="Enter phone number"
          onChange={(e) => {
            setFormData({ ...formData, phoneNumber: e.target.value });
          }}
        />
        <button
          className="mt-2 btn border-0 fw-semibold btn-secondary w-100 py-2"
          type="button"
          onClick={saveProfile}
        >
          Save
        </button>
      </form>
      <div className="border-0 rounded-3 bg-white fw-light p-2 mt-3">
        <div className="fw-medium">Settings</div>
        <button
          className="mt-2 btn border-0 btn-secondary fw-semibold w-100 py-2"
        
          onClick={changePassword}
        >
          change password
        </button>
        <button
          className="mt-2 btn border-0 fw-semibold btn-secondary w-100 py-2"
          onClick={updateProfilePic}
        >
          Update profile picture
        </button>
      </div>
    </div>
  );
};

export default ManagerProfile;
