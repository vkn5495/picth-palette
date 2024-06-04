import React from "react";
import Navbar from "./component/navbar";
import SideBar from "./component/SideBar/SideBar";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <SideBar />
      <Navbar />
    </div>
  );
};

export default App;
