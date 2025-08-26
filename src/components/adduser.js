import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [user, setUser] = useState({ name: "", phone: "", email: "", location: "" });
  const navigate = useNavigate();

  const onInputChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add User</h3>
      <input type="text" name="name" placeholder="Name" className="form-control mb-2" onChange={onInputChange} />
      <input type="text" name="phone" placeholder="Phone" className="form-control mb-2" onChange={onInputChange} />
      <input type="email" name="email" placeholder="Email" className="form-control mb-2" onChange={onInputChange} />
      <input type="text" name="location" placeholder="Location" className="form-control mb-2" onChange={onInputChange} />
      <button className="btn btn-primary">Save</button>
    </form>
  );
}

export default AddUser;
