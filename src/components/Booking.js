const { format } = require("date-fns");
const { useState, useEffect } = require("react");
const { Bar } = require("react-chartjs-2");
const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingSummary, setBookingSummary] = useState({});
  const [startIndex, setStartIndex] = useState(0);
  const bookingsPerPage = 5;

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = format(date, "dd-MM-yyyy");
    const formattedTime = format(date, "hh:mm a");

    return { formattedDate, formattedTime };
  };

  const statusChartData = {
    labels: Object.keys(bookingSummary.status),
    datasets: [
      {
        label: "Booking status",
        data: Object.values(bookingSummary.status),
        backgroundColor: ["#36A2EB", "#FFCE56"], // Customize the colors as needed
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const fetchBookings = async () => {
      const data = [
        {
          id: "Bk1",
          date: 1637208000, // Unix timestamp for "2021-11-18 12:00:00"
          roomType: "Single",
          bookedBy: "John Doe",
          status: "Confirmed",
        },
        {
          id: "Bk2",
          date: 1637294400, // Unix timestamp for "2021-11-19 12:00:00"
          roomType: "Double",
          bookedBy: "Jane Smith",
          status: "Pending",
        },
        {
          id: "Bk3",
          date: 1637380800, // Unix timestamp for "2021-11-20 12:00:00"
          roomType: "Suite",
          bookedBy: "Alice Johnson",
          status: "Confirmed",
        },
        {
          id: "Bk4",
          date: 1637467200, // Unix timestamp for "2021-11-21 12:00:00"
          roomType: "Single",
          bookedBy: "Bob Miller",
          status: "Pending",
        },
        {
          id: "Bk5",
          date: 1637553600, // Unix timestamp for "2021-11-22 12:00:00"
          roomType: "Double",
          bookedBy: "Eve Johnson",
          status: "Confirmed",
        },
        {
          id: "Bk6",
          date: 1637640000, // Unix timestamp for "2021-11-23 12:00:00"
          roomType: "Suite",
          bookedBy: "Charlie Brown",
          status: "Pending",
        },
        {
          id: "Bk7",
          date: 1637726400, // Unix timestamp for "2021-11-24 12:00:00"
          roomType: "Single",
          bookedBy: "Lucy Williams",
          status: "Confirmed",
        },
        {
          id: "Bk8",
          date: 1637812800, // Unix timestamp for "2021-11-25 12:00:00"
          roomType: "Double",
          bookedBy: "Linus Jackson",
          status: "Pending",
        },
        {
          id: "Bk9",
          date: 1637899200, // Unix timestamp for "2021-11-26 12:00:00"
          roomType: "Suite",
          bookedBy: "Snoopy Davis",
          status: "Confirmed",
        },
        {
          id: "Bk10",
          date: 1637985600, // Unix timestamp for "2021-11-27 12:00:00"
          roomType: "Single",
          bookedBy: "Woodstock Lee",
          status: "Pending",
        },
      ];
      const bookingSummary = {
        status: {
          confirmed: 100,
          pending: 20,
        },
        roomType: {
          single: 100,
          double: 20,
          suite: 20,
        },
      };

      const sortedBookings = data.sort((a, b) => {
        const dateA = parseInt(a.date, 10);
        const dateB = parseInt(b.date, 10);
        return dateB - dateA;
      });
      setBookings(sortedBookings);
      setBookingSummary(bookingSummary);
    };
    fetchBookings();
  }, []);

  const handleNextClick = () => {
    if (startIndex + bookingsPerPage < bookings.length) {
      setStartIndex(startIndex + bookingsPerPage);
    }
  };

  const handlePrevClick = () => {
    if (startIndex - bookingsPerPage >= 0) {
      setStartIndex(startIndex - bookingsPerPage);
    }
  };

  return (
    <div>
      <div className="bg-white border m-5 rounded-4  px-3 pt-3">
        <div className="row justify-content-between">
          <div className="col-2">
            <div className="bg-light rounded-2 text-center py-1">ID</div>
          </div>
          <div className="col-2">
            <div className="bg-light rounded-2 text-center py-1">
              date and time
            </div>
          </div>
          <div className="col-2">
            <div className="bg-light rounded-2 text-center py-1">Room type</div>
          </div>
          <div className="col-2">
            <div className="bg-light rounded-2 text-center py-1">booked by</div>
          </div>
          <div className="col-2">
            <div className="bg-light rounded-2 text-center py-1">Status</div>
          </div>
        </div>
        <hr className="mt-2" />
        {bookings
          .slice(startIndex, startIndex + bookingsPerPage)
          .map((booking, index) => (
            <div key={index}>
              <div className="row align-items-center justify-content-between">
                <div className="col-2 px-4">{booking.id}</div>
                <div className="col-2 d-flex justify-content-center">
                  <div className="d-flex flex-column align-items-start">
                    <span>{formatTimestamp(booking.date).formattedDate}</span>
                    <span>{formatTimestamp(booking.date).formattedTime}</span>
                  </div>
                </div>
                <div className="col-2 px-4">{booking.roomType}</div>
                <div className="col-2 px-4">{booking.bookedBy}</div>
                <div className="col-2 px-4 ">{booking.status}</div>
              </div>
              <hr />
            </div>
          ))}
        <div className="d-flex justify-content-center mb-2 align-items-center">
          <button
            className="btn btn-sm border-0 bg-light rounded-circle"
            onClick={handlePrevClick}
            disabled={startIndex == 0}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <div className="mx-3">
            {startIndex + 1} -{" "}
            {Math.min(startIndex + bookingsPerPage, bookings.length)} of{" "}
            {bookings.length}
          </div>
          <button
            className="btn btn-sm border-0 bg-light rounded-circle"
            onClick={handleNextClick}
          >
            <i className="bi bi-chevron-right "></i>
          </button>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-6">
          <div className="bg-white rounded-4 p-3">
            <div>
              <h2>Proportion of booking status</h2>
              <Bar data={statusChartData} options={options} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="bg-white rounded-4 p-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
