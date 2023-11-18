const { format } = require("date-fns");
const { useState, useEffect } = require("react");
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const reviewsPerPage = 5;

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = format(date, "dd-MM-yyyy");
    const formattedTime = format(date, "hh:mm a");

    return { formattedDate, formattedTime };
  };

  useEffect(() => {
    const fetchReviews = async () => {
      // const response = await fetch("http://localhost:3000/reviews");
      // const data = await response.json();
      const data = [
        {
          id: 1,
          reviewer: "Alice Johnson",
          date: "1666632563517", // Assuming "1635705600" is a timestamp string
          rating: 4,
          comment: "Great product!",
        },
        {
          id: 2,
          reviewer: "Bob Smith",
          date: "1666632563517",
          rating: 5,
          comment: "Excellent service!",
        },
        {
          id: 3,
          reviewer: "Charlie Brown",
          date: "1666632563517",
          rating: 3.5,
          comment: "Good experience overall.",
        },
        {
          id: 4,
          reviewer: "Diana Miller",
          date: "1666632563517",
          rating: 2.5,
          comment: "Could be better.",
        },
        {
          id: 5,
          reviewer: "Eva Davis",
          date: "1666632563517",
          rating: 4,
          comment: "Satisfied with the purchase.",
        },
        {
          id: 6,
          reviewer: "Frank Wilson",
          date: "1666632563517",
          rating: 5,
          comment: "Highly recommended!",
        },
        {
          id: 7,
          reviewer: "Grace Taylor",
          date: "1666632563517",
          rating: 3,
          comment: "Average experience.",
        },
        {
          id: 8,
          reviewer: "Henry White",
          date: "1666632563517",
          rating: 4.5,
          comment: "Almost perfect!",
        },
        {
          id: 9,
          reviewer: "Ivy Lee",
          date: "1666632563517",
          rating: 2,
          comment: "Not satisfied with the quality.",
        },
        {
          id: 10,
          reviewer: "Jackie Turner",
          date: "1666632563517",
          rating: 3.5,
          comment: "Decent service.",
        },
      ];
      const sortedReviews = data.sort((a, b) => {
        const dateA = parseInt(a.date, 10);
        const dateB = parseInt(b.date, 10);
        return dateB - dateA;
      });
      setReviews(sortedReviews);
    };
    fetchReviews();
  }, []);

  const renderStars = (rating, id) => {
    const roundedRating = Math.min(Math.max(0, rating), 5);
    const stars = [];

    for (let i = 0; i < Math.floor(roundedRating); i++) {
      stars.push(
        <i key={`${id}_full_${i}`} className="bi bi-star-fill text-warning"></i>
      );
    }

    if (roundedRating % 1 !== 0) {
      stars.push(
        <i key={`${id}_half`} className="bi bi-star-half text-warning"></i>
      );
    }

    for (let i = 0; i < 5 - Math.ceil(roundedRating); i++) {
      stars.push(
        <i
          key={`${id}_empty_${i + Math.ceil(roundedRating)}`}
          className="bi bi-star text-warning"
        ></i>
      );
    }

    return stars;
  };

  const handleNextClick = () => {
    if (startIndex + reviewsPerPage < reviews.length) {
      setStartIndex(startIndex + reviewsPerPage);
    }
  };

  const handlePrevClick = () => {
    if (startIndex - reviewsPerPage >= 0) {
      setStartIndex(startIndex - reviewsPerPage);
    }
  };

  return (
    <div className="bg-white border m-5 rounded-4  px-3 pt-3">
      <div className="row justify-content-between">
        <div className="col-3">
          <div className="bg-light rounded-2 text-center py-1">Reviewer</div>
        </div>
        <div className="col-2">
          <div className="bg-light rounded-2 text-center py-1">Rating</div>
        </div>
        <div className="col-5">
          <div className="bg-light rounded-2 text-center py-1">Comment</div>
        </div>
        <div className="col-2">
          <div className="bg-light rounded-2 text-center py-1">Date</div>
        </div>
      </div>
      <hr className="mt-2" />
      {reviews
        .slice(startIndex, startIndex + reviewsPerPage)
        .map((review, index) => (
          <div key={index}>
            <div className="row align-items-center justify-content-between">
              <div className="col-3 px-4">{review.reviewer}</div>
              <div className="col-2 px-4">
                <div>{renderStars(review.rating, review.id)}</div>
              </div>
              <div className="col-5 px-4">{review.comment}</div>
              <div className="col-2 d-flex justify-content-center">
                <div className="d-flex flex-column align-items-start">
                  <span>{formatTimestamp(review.date).formattedDate}</span>
                  <span>{formatTimestamp(review.date).formattedTime}</span>
                </div>
              </div>
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
          {Math.min(startIndex + reviewsPerPage, reviews.length)} of{" "}
          {reviews.length}
        </div>
        <button
          className="btn btn-sm border-0 bg-light rounded-circle"
          onClick={handleNextClick}
        >
          <i className="bi bi-chevron-right "></i>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
