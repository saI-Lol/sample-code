import RoomTypeDisplay from "../components/RoomTypeDisplay";
import { useState } from "react";
const RoomTypeDisplayContainer = ({
  roomTypesList,
  setRoomTypesList,
  setRoomTypeDescription,
  setRoomAttributeList,
  setRoomTypePrice,
  setRoomTypeLabel,
  setRoomTypeNumberRooms,
  setRoomTypeId,
}) => {
  const [roomTypeIndex, setRoomTypeIndex] = useState(0);
  const style = { backgroundColor: "rgb(252,252,252)" };
  return (
    <div className="d-flex align-items-center  px-2 py-3 border rounded-4">
      {roomTypesList[roomTypeIndex] && (
        <button
          className="btn border-0 rounded-circle bg-light me-3"
          style={style}
          disabled={roomTypeIndex - 1 < 0}
          onClick={() => {
            setRoomTypeIndex(
              (previousRoomTypeIndex) => previousRoomTypeIndex - 1
            );
          }}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
      )}
      <div className="flex-grow-1">
        <div className="fw-light fs-5">All Room types</div>

        <RoomTypeDisplay
          roomTypeInfo={roomTypesList[roomTypeIndex]}
          roomTypesList={roomTypesList}
          setRoomTypesList={setRoomTypesList}
          setRoomTypeId={setRoomTypeId}
          setRoomTypeLabel={setRoomTypeLabel}
          setRoomTypeDescription={setRoomTypeDescription}
          setRoomTypePrice={setRoomTypePrice}
          setRoomTypeNumberRooms={setRoomTypeNumberRooms}
          setRoomAttributeList={setRoomAttributeList}
          setRoomTypeIndex={setRoomTypeIndex}
          roomTypeIndex={roomTypeIndex}
        />
      </div>
      {roomTypesList[roomTypeIndex] && (
        <button
          className="btn bg-light rounded-circle border-0 ms-3"
          style={style}
          disabled={roomTypeIndex + 1 == roomTypesList.length}
          onClick={() => {
            setRoomTypeIndex(
              (previousRoomTypeIndex) => previousRoomTypeIndex + 1
            );
            console.log(roomTypeIndex);
          }}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      )}
    </div>
  );
};

export default RoomTypeDisplayContainer;
