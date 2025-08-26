import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/userlist";
import AddUser from "./components/adduser";
import EditUser from "./components/edituser";
import ViewUser from "./components/viewuser";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center mb-4">User List CRUD App</h2>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/view/:id" element={<ViewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
