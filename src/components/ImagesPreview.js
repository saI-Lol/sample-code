import { useState } from "react";

const ImagesPreview = ({ imageArray }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="border mb-2 rounded-4 p-2">
      <div className="fw-light fs-5">Hostel Images</div>
      {imageArray.length > 0 ? (
        <div
          id="hostelImages"
          className="carousel carousel-dark slide "
        >
          <div className="carousel-inner">
            {imageArray.map((imageArrayItem, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeIndex && "active"}`}
                style={{ height: "200px" }}
              >
                <img
                  src={URL.createObjectURL(imageArrayItem)}
                  className="d-block w-100 img-fluid "
                  alt="..."
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hostelImages"
            data-bs-slide="prev"
            onClick={() =>
              setActiveIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageArray.length) % imageArray.length
              )
            }
          >
            <span
            className="bg-secondary rounded-circle px-2 py-1 text-white"
            ><i className="bi bi-chevron-left"></i></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hostelImages"
            data-bs-slide="next"
            onClick={() =>
              setActiveIndex((prevIndex) => (prevIndex + 1) % imageArray.length)
            }
          >
            <span
            className="bg-secondary rounded-circle px-2 py-1 text-white"
            ><i className="bi bi-chevron-right"></i></span>
          </button>
        </div>
      ) : (
        <div className="fw-light">There are no current images</div>
      )}
    </div>
  );
};

export default ImagesPreview;
