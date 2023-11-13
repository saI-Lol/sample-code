import { useState } from "react";
import AmenityButton from "./TextCancelButton";
const Amenities = ({ amenityList, setAmenityList }) => {
  const [amenity, setAmenity] = useState("");
  const style = {
    backgroundColor: "rgb(252,252,252)",
  };

  const removeAmenity = (amenityTobeRemoved) => {
    const filteredAmenityList = amenityList.filter(
      (amenityListItem) => amenityListItem !== amenityTobeRemoved
    );
    setAmenityList(filteredAmenityList);
  };

  const addAmenityToList = (newAmenity) => {
    newAmenity = newAmenity.toLowerCase().trim();
    if (newAmenity && !amenityList.includes(newAmenity)) {
      setAmenityList([...amenityList, newAmenity]);
      setAmenity("");
    }
  };
  return (
    <div className="border rounded-4 p-3 mb-2">
      <label htmlFor="amenities" className="form-label fw-light fs-5">
        Amenities
      </label>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control fw-light"
          placeholder="Enter amenity"
          aria-describedby="button-addon2"
          value={amenity}
          onChange={(e) => setAmenity(e.target.value)}
          style={style}
        />
        <button
          className="btn bg-light border"
          type="button"
          id="button-addon2"
          onClick={() => {
            addAmenityToList(amenity);
          }}
        >
          <i className="bi bi-plus"></i>
        </button>
      </div>
      <div className="d-flex flex-wrap">
        {amenityList.map((amenityListItem, index) => (
          <AmenityButton
            text={amenityListItem}
            cancelFunction={removeAmenity}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Amenities;
