import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useAuth } from '../Authorization/AuthContext';
import FinalNote from "./FinalNote";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
//import '../style/auth.css';

const AuthRouts = () => {
  const { currentUser } = useAuth() || {};

  return (
    <>
      <nav>
        <ul className="nav-links">
          {currentUser ? (
            <>
              <li><Link to="/notes">Notes</Link></li>
              <li><Logout /></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={!currentUser ? <Login /> : <Navigate to="/notes" />} />
        <Route path="/signup" element={!currentUser ? <Signup /> : <Navigate to="/notes" />} />
        <Route path="/notes" element={currentUser ? <FinalNote /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default AuthRouts;
