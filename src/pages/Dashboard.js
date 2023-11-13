import RoomTypeDisplayContainer from "../containers/RoomTypeDisplayContainer";
import NameLocationImages from "../components/NameLocationImages";
import Amenities from "../components/Amenities";
import RoomTypes from "../components/RoomTypes";
import ImagesPreview from "../components/ImagesPreview";
import { useState } from "react";
const Dashboard = () => {
  const [amenityList, setAmenityList] = useState([]);
  const [roomAttributeList, setRoomAttributeList] = useState([]);
  const [roomTypesList, setRoomTypesList] = useState([]);
  const [hostelName, setHostelName] = useState("");
  const [location, setLocation] = useState("");
  const [roomTypeId, setRoomTypeId] = useState("");
  const [roomTypeLabel, setRoomTypeLabel] = useState("");
  const [roomTypeDescription, setRoomTypeDescription] = useState("");
  const [roomTypePrice, setRoomTypePrice] = useState("");
  const [roomTypeNumberRooms, setRoomTypeNumberRooms] = useState("");
  const [images, setImages] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const hostelData = {
      hostelName,
      location,
      images,
      amenityList,
      roomTypesList,
    };
    console.log(hostelData);
  };

  return (
    <div className="row p-5">
      <form className="col-6">
        <NameLocationImages
          hostelName={hostelName}
          setHostelName={setHostelName}
          location={location}
          setLocation={setLocation}
          setImages={setImages}
        />
        <Amenities amenityList={amenityList} setAmenityList={setAmenityList} />
        <RoomTypes
          roomTypeId={roomTypeId}
          roomTypesList={roomTypesList}
          roomTypeLabel={roomTypeLabel}
          roomTypeNumberRooms={roomTypeNumberRooms}
          roomTypePrice={roomTypePrice}
          roomTypeDescription={roomTypeDescription}
          roomAttributeList={roomAttributeList}
          setRoomAttributeList={setRoomAttributeList}
          setRoomTypeDescription={setRoomTypeDescription}
          setRoomTypeLabel={setRoomTypeLabel}
          setRoomTypesList={setRoomTypesList}
          setRoomTypePrice={setRoomTypePrice}
          setRoomTypeNumberRooms={setRoomTypeNumberRooms}
          setRoomTypeId={setRoomTypeId}
        />
        <div className="btn btn-primary  py-2 w-100" type='button' onClick={submitForm}>
          Save all changes
        </div>
      </form>
      <div className="col-6">
        <ImagesPreview imageArray={images} />
        <RoomTypeDisplayContainer
          roomTypesList={roomTypesList}
          setRoomTypesList={setRoomTypesList}
          setRoomTypeDescription={setRoomTypeDescription}
          setRoomAttributeList={setRoomAttributeList}
          setRoomTypePrice={setRoomTypePrice}
          setRoomTypeLabel={setRoomTypeLabel}
          setRoomTypeNumberRooms={setRoomTypeNumberRooms}
          setRoomTypeId={setRoomTypeId}
        />
      </div>
    </div>
  );
};

export default Dashboard;
