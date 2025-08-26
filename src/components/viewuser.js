import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <h3>User Details</h3>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Location:</b> {user.location}</p>
      <Link to="/" className="btn btn-primary">Back</Link>
    </div>
  );
}

export default ViewUser;
