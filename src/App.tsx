import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "./components/Sidebar/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="bg-black">
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
