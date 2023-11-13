import { useState } from "react";
import RoomAttributeButton from "./TextCancelButton";
import RoomType from "../helpers/RoomTypeClass";
const RoomTypes = ({
  roomTypeId,
  setRoomTypeId,
  roomTypeLabel,
  setRoomTypeLabel,
  roomTypeDescription,
  setRoomTypeDescription,
  roomTypePrice,
  setRoomTypePrice,
  roomTypeNumberRooms,
  setRoomTypeNumberRooms,
  roomAttributeList,
  setRoomAttributeList,
  roomTypesList,
  setRoomTypesList,
}) => {
  const style = { backgroundColor: "rgb(252,252,252)" };
  const [roomAttribute, setRoomAttribute] = useState("");
  const removeRoomAttribute = (roomAttributeToBeRemoved) => {
    const filteredRoomAttributeList = roomAttributeList.filter(
      (roomAttributeListItem) =>
        roomAttributeListItem !== roomAttributeToBeRemoved
    );
    setRoomAttributeList(filteredRoomAttributeList);
  };
  const addRoomAttributeToList = (newRoomAttribute) => {
    newRoomAttribute = newRoomAttribute.toLowerCase().trim();
    if (newRoomAttribute && !roomAttributeList.includes(newRoomAttribute)) {
      setRoomAttributeList([...roomAttributeList, newRoomAttribute]);
    }
    setRoomAttribute("");
  };

  const addRoomType = () => {
    console.log(roomTypeId)
    if(!roomTypeLabel || !roomTypeDescription || !roomTypePrice || !roomTypeNumberRooms) {
      return;
    }
    if (!roomTypeId) {
      const uniqueId = new Date().getTime();
      const roomType = new RoomType(
        uniqueId,
        roomTypeLabel,
        roomTypeDescription,
        roomTypePrice,
        roomTypeNumberRooms,
        roomAttributeList
      );
      setRoomTypesList([...roomTypesList, roomType]);
    } else {
      setRoomTypesList((previousRoomTypesList) => {
        return previousRoomTypesList.map((previousRoomTypesListItem) => {
          if (previousRoomTypesListItem.id === roomTypeId) {
            return new RoomType(
              roomTypeId,
              roomTypeLabel,
              roomTypeDescription,
              roomTypePrice,
              roomTypeNumberRooms,
              roomAttributeList
            );
          }
          return previousRoomTypesListItem;
        });
      });
      setRoomTypeId("");
    }
    setRoomTypeLabel("");
    setRoomTypeDescription("");
    setRoomTypePrice("");
    setRoomTypeNumberRooms("");
    setRoomAttributeList([]);
  };

  return (
    <div className="mb-2 border rounded-4 p-3">
      <label htmlFor="" className="form-label fw-light fs-5">
        Room Types
      </label>
      <div className="mb-3">
        <input
          type="text"
          className="form-control fw-light"
          placeholder="Enter label"
          value={roomTypeLabel}
          onChange={(e) => setRoomTypeLabel(e.target.value)}
          style={style}
        />
      </div>
      <div className="mb-3">
        <textarea
          cols="30"
          rows="3"
          className="form-control fw-light"
          placeholder="Enter description"
          value={roomTypeDescription}
          onChange={(e) => setRoomTypeDescription(e.target.value)}
          style={style}
        ></textarea>
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control fw-light"
          placeholder="Enter price"
          value={roomTypePrice}
          onChange={(e) => setRoomTypePrice(e.target.value)}
          style={style}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control fw-light"
          placeholder="Enter quantity of rooms"
          value={roomTypeNumberRooms}
          onChange={(e) => setRoomTypeNumberRooms(e.target.value)}
          style={style}
        />
      </div>
      <div className="mb-3">
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control fw-light"
            placeholder="Enter unique attribute"
            aria-describedby="button-addon3"
            value={roomAttribute}
            onChange={(e) => setRoomAttribute(e.target.value)}
            style={style}
          />
          <button
            className="btn bg-light border"
            type="button"
            id="button-addon3"
            onClick={() => {
              addRoomAttributeToList(roomAttribute);
            }}
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>
        <div className="d-flex flex-wrap">
          {roomAttributeList.map((roomAttributeListItem, index) => (
            <RoomAttributeButton
              text={roomAttributeListItem}
              cancelFunction={removeRoomAttribute}
              key={index}
            />
          ))}
        </div>
      </div>
      <button className="btn btn-secondary py-1 px-3 w-100" type='button' onClick={addRoomType}>
        Save
      </button>
    </div>
  );
};

export default RoomTypes;
