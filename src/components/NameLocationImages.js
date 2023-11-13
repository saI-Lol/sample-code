const NameLocationImages = ({
  hostelName,
  location,
  setHostelName,
  setLocation,
  setImages,
}) => {
  const style = {
    backgroundColor: "rgb(252,252,252)",
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setImages(Array.from(files));
    console.log(files);
  };

  return (
    <div className="p-3 border rounded-4 mb-2">
      <div className="form-label fw-light fs-5">Name, Location and images</div>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          className="form-control fw-light "
          placeholder="Enter hostel name"
          value={hostelName}
          onChange={(e) => setHostelName(e.target.value)}
          style={style}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="location"
          className="form-control fw-light "
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={style}
        />
      </div>
      <div>
        <label
          htmlFor="hostelImages"
          className="form-label fw-light border rounded py-1 px-3"
          style={style}
        >
          Upload hostel images
        </label>
        <input
          type="file"
          id="hostelImages"
          name="images"
          accept="image/*"
          onChange={handleFileChange}
          multiple
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default NameLocationImages;
