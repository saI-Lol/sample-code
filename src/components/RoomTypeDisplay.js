import { useEffect } from "react";
const RoomTypeDisplay = ({
  roomTypeInfo,
  roomTypesList,
  setRoomTypesList,
  setRoomTypeId,
  setRoomTypeLabel,
  setRoomTypeDescription,
  setRoomTypePrice,
  setRoomTypeNumberRooms,
  setRoomAttributeList,
  setRoomTypeIndex,
}) => {
  const style = { backgroundColor: "rgb(252,252,252)" };

  const deleteRoomType = () => {
    const filteredRoomTypesList = roomTypesList.filter(
      (roomType) => roomType.id !== roomTypeInfo.id
    );
    setRoomTypesList(filteredRoomTypesList);
    setRoomTypeIndex((previousRoomTypeIndex) => {
      if (previousRoomTypeIndex > 0) {
        return previousRoomTypeIndex - 1;
      }
    });
  };


  const updateRoomType = () => {
    setRoomTypeId(roomTypeInfo.id);
    setRoomTypeLabel(roomTypeInfo.label);
    setRoomTypeDescription(roomTypeInfo.description);
    setRoomTypePrice(roomTypeInfo.price);
    setRoomTypeNumberRooms(roomTypeInfo.quantity);
    setRoomAttributeList(roomTypeInfo.attributes);
  };

  return (
    <div>
      {!roomTypeInfo && <div className="fw-light">There are no current room types</div>}
      {roomTypeInfo && (
        <>
          <div className="fw-light mb-3 p-2 rounded" style={style}>
            {roomTypeInfo.label}
          </div>
          <div className="fw-light mb-3 p-2 rounded" style={style}>
            {roomTypeInfo.description}
          </div>
          <div className="fw-light mb-3 p-2 rounded" style={style}>
            {roomTypeInfo.price.toLocaleString("en-UG", {
              style: "currency",
              currency: "UGX",
            })}
          </div>
          <div className="fw-light mb-3 p-2 rounded" style={style}>
            {`${roomTypeInfo.quantity} rooms`}
          </div>
          <div className="fw-light mb-3 d-flex flex-wrap">
            {roomTypeInfo.attributes.map((attribute, index) => (
              <div key={index} className="bg-light rounded px-2 py-1 mb-1 me-1">
                {attribute}
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-warning px-5 py-1"
              onClick={updateRoomType}
            >
              <i className="bi bi-arrow-clockwise"></i>
            </button>
            <button
              className="btn btn-danger px-5 py-1"
              onClick={deleteRoomType}
            >
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RoomTypeDisplay;
