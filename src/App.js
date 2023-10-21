import CarouselContainer from "./components/carouselContainer";
import HostelCarousel from "./components/hostelCarousel";
import StudentProfile from "./pages/StudentProfile";

function App() {
  const hostelImages=["https://i.pinimg.com/236x/35/e1/f3/35e1f33383c5b2d916926b82cd2fc3aa.jpg","https://i.pinimg.com/236x/d2/52/0d/d2520d275744bf132022873a2321a2c9.jpg","https://i.pinimg.com/236x/dd/b9/47/ddb9476f8902eace4194e9d4b1a4bc81.jpg","https://i.pinimg.com/236x/6f/8c/8d/6f8c8dfdc31793784f56f77c72428363.jpg"];
  return (
    <div className="App">
      {/* <StudentProfile />
       */}
       
      {/* <HostelCarousel
        hostelName="Hostel Name"
        hostelLocation="Hostel Location"
        roomsAvailable="10"
        averageRating="4.5"
        hostelImages={hostelImages}
      /> */}
      <CarouselContainer />
    </div>
  );
}

export default App;
