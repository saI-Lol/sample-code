import { useState } from "react";
import "../styles/hostelCarousel.css";
const HostelCarousel = ({
  hostelId,
  hostelName,
  hostelLocation,
  roomsAvailable,
  averageRating,
  hostelImages,
}) => {
  
  const [activeImage, setActiveImage] = useState(0);
  // Function to navigate to the previous image
  const prevImage = () => {
    if (activeImage > 0) {
      setActiveImage(activeImage - 1);
    }
  };

  // Function to navigate to the next image
  const nextImage = () => {
    if (activeImage < hostelImages.length - 1) {
      setActiveImage(activeImage + 1);
    }
  };
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 .carousel-container">
      <div id={`hostelImageSlide${hostelId}`} className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {hostelImages.map((image, index) => {
            console.log(image);
            const classname =
              index === activeImage ? "carousel-item active " : "carousel-item ";
            return (
              <div key={index} className={classname} >
                <img
                  src={image}
                  className="rounded-3 img-fluid"
                  alt="hostel image"
                />
              </div>
            );
          })}
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#hostelImageSlide${hostelId}`}
            data-bs-slide="prev"
            disabled={activeImage === 0}
            onClick={prevImage}
            style={{ display: activeImage === 0 ? "none" : "block" }}
          >
            <div
              className="rounded-circle bg-light"
              style={{ width: "25px", height: "25px" }}
            >
              <i className="bi bi-chevron-left text-secondary fs-6"></i>
            </div>
          </button>
        </div>

        <div className="carousel-controls">
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#hostelImageSlide${hostelId}`}
            data-bs-slide="next"
            disabled={activeImage === hostelImages.length - 1}
            onClick={nextImage}
            style={{
              display:
                activeImage === hostelImages.length - 1 ? "none" : "block",
            }}
          >
            <div
              className="rounded-circle bg-light"
              style={{ width: "25px", height: "25px" }}
            >
              <i className="bi bi-chevron-right text-secondary fs-6"></i>
            </div>
          </button>
        </div>
      </div>
      <div className="d-flex flex-column lh-sm">
        <div className="d-flex">
          <div className="flex-grow-1">{hostelName}</div>
          <div>
            <i className="bi bi-star-fill fs-6"></i> {averageRating}
          </div>
        </div>
        <div className="text-muted">{hostelLocation}</div>
        <div>
          <span className="fw-bold">{roomsAvailable}</span>{" "}
          <span className="text-muted">rooms available</span>
        </div>
      </div>
    </div>
  );
};

export default HostelCarousel;
