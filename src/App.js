import { Routes, Route } from "react-router-dom";
import React from "react";
import "./app.scss";
import {
  Home,
  Recovery,
  Entrance,
  Registration,
  NotFound,
  About,
  Contact,
} from "./pages";
import Layout from "./component/Layout/Layout";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="registration" element={<Registration />} />
          <Route path="enter" element={<Entrance />} />
          <Route path="recovery" element={<Recovery />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
