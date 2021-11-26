import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";
import Signup from "./pages/Signup/index";
import Signin from "./pages/Signin/index";
import Header from "./components/Header";
import Home from "./pages/Home/index";
import Profile from "./pages/Profile/index"



export default function App() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="home" element={<Home />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/profile" element={<Profile />} />
        </Routes>
      </Router>
    );
  }