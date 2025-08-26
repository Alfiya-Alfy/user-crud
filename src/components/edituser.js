import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", phone: "", email: "", location: "" });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  const onInputChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Edit User</h3>
      <input type="text" name="name" value={user.name} className="form-control mb-2" onChange={onInputChange} />
      <input type="text" name="phone" value={user.phone} className="form-control mb-2" onChange={onInputChange} />
      <input type="email" name="email" value={user.email} className="form-control mb-2" onChange={onInputChange} />
      <input type="text" name="location" value={user.location} className="form-control mb-2" onChange={onInputChange} />
      <button className="btn btn-success">Update</button>
    </form>
  );
}

export default EditUser;
