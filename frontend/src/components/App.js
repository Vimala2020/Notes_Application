import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "./AuthRouts";
import { AuthProvider } from '../Authorization/AuthContext';
import '../styles/app.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <header className="header">
            <h1>Notes App</h1>
            <AuthRoutes />
          </header>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
