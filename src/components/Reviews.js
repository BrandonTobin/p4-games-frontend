import { useEffect, useState } from "react";
import "../styles/Reviews.css";

function Reviews(props) {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const onClickHandler = (e) => {
    e.preventDefault();
    props.addReview({
      name: "test-person",
      review: review,
      post: props.postId,
    });
    setReview("");
    setReviews([...reviews, { review }]);
  };
  const onChangeHandler = (e) => {
    setReview(e.target.value);
  };

  useEffect(() => {
    setReviews(props.reviews);
  }, []);

  return (
    <div className="container">
      {reviews.map((review, index) => (
        <div key={index} className="review-container">
          {review.review}
        </div>
      ))}
      <div className="review-flexbox">
        <h3 className="review-text"> Review </h3>
        <textarea
          value={review}
          onChange={onChangeHandler}
          className="input-box"
        />
        <div>
          <button onClick={onClickHandler} className="review-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Reviews;