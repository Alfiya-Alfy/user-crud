import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };

  return (
    <div>
      <Link to="/add" className="btn btn-primary mb-3">Create CRUD</Link>
      <table className="table table-bordered text-center shadow">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
            <th style={{ width: "400px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>
                <Link to={`/view/${user.id}`} className="btn btn-warning btn-sm me-2">View</Link>
                <Link to={`/edit/${user.id}`} className="btn btn-success btn-sm me-2">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
