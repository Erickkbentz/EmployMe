import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home/Home";
import JobList from "./pages/JobList/JobList";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const googleAuthClientID = "410060624892-1tpr3jnna9ad79anl9vf2mt4lvugpi9v.apps.googleusercontent.com";
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={googleAuthClientID} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobList />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
