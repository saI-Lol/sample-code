import { useEffect, useState } from "react";
import HostelCarousel from "./hostelCarousel";
const CarouselContainer = () => {
  const [hostels, setHostels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/hostels");
      const data = await response.json();
      setHostels(data);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row row-gap-5">
        {hostels.map((hostel) => {
          return (
              <HostelCarousel
                key={hostel.id}
                hostelId={hostel.id}
                hostelName={hostel.name}
                hostelLocation={hostel.location}
                roomsAvailable={hostel.rooms_available}
                averageRating={hostel.rating}
                hostelImages={hostel.images}
              />
          );
        })}
      </div>
    </div>
  );
};

export default CarouselContainer;
