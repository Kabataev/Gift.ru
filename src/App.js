import React from "react";
import "./app.scss";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Registration from "./pages/Registration/Registration";
import Entrance from "./pages/Entrance/Entrance";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="registration" element={<Registration />} />
          <Route path="enter" element={<Entrance />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
