import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import brandon from "../../src/images/brandontobin.jpeg"

function Users(props) {
  const [users, setUsers] = useState(null);
  const BASE_URL = "https://localhost:3000/users";
  const loaded = () => {
    return users.map((user, index) => {
      return (
        <div key={index} className="users">
          <Link className="userslink" to={`/users/${user._id}`}>
            <h1>{user.name} </h1>
          </Link>
        </div>
      );
    });
  };

  async function fetchUser() {
    try {
      const response = await fetch(BASE_URL);
      const user = await response.json();
      setUsers(user);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <section className="user-list">
      <img className="brandon-image" src={brandon} />
    </section>
  );
}

export default Users;