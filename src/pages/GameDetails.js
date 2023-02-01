import { useState, useEffect } from "react";
import { useParams } from "react-router";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import Reviews from "../components/Reviews";
import UserPost from "../components/UserPost";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    image: "",
    title: "",
    post: id,
  });

  async function fetchPostData() {
    try {
      const response = await (
        await fetch(`http://localhost:3000/games/${id}`)
      ).json();

      setGame(response.game);
      setUser(response.user);
      setReviews(response.reviews);
    } catch (err) {
      console.log(err);
    }
  }

  async function addReview(data) {
    try {
      const response = await (
        await fetch(`http://localhost:3000/reviews/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
      ).json();
      setReviews([...reviews, response]);
    } catch (err) {
      console.log(err);
    }
  }
  const handleFormChange = (e) => {
    const userInput = { ...editForm };
    userInput[e.target.name] = e.target.value;
    setEditForm(userInput);
  };
  const handleForm = async (e) => {
    e.preventDefault();
    const currentState = { ...editForm };

    try {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentState),
      };
      const response = await fetch(
        `http://localhost:3000/games/${id}`,
        requestOptions
      );
      const updatedPost = await response.json();
      setEditForm(updatedPost);
      fetchPostData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  if (game) {
    return (
      <div>
        <form id="edit-form" onSubmit={(e) => handleForm(e, game._id)}>
          <div>
            <label id="label-name" htmlFor="name">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="enter a game title"
                value={editForm.title}
                onChange={handleFormChange}
              />
            </label>
          </div>
          <div>
            <label id="label-image" htmlFor="image">
              Image
              <input
                type="text"
                id="photo"
                name="photo"
                placeholder="enter a url image"
                value={editForm.photo}
                onChange={handleFormChange}
              />
            </label>
          </div>
          <div>
            <label id="label-body" htmlFor="title">
              Review
              <input
                type="text"
                id="body"
                name="body"
                placeholder="enter a review"
                value={editForm.body}
                onChange={handleFormChange}
              />
              <input type="submit" value="Edit post" />
            </label>
            <br />
          </div>
        </form>
        <UserPost game={game} user={user} />
        <Reviews addReview={addReview} reviews={reviews} postId={id} />
      </div>
    );
  }

  return <LoadingPlaceholder />;
}

export default GameDetails;