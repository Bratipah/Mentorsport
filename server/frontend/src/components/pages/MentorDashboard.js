import React, { useState } from "react";
// import Sidebar from '../Sidebar'
import "./menteedashb.css";
import Items from "../Items.js";
import Profile from "../Profile.js";
import Learning from "./Learning";
import MyStory from "./MyStory";
import AddEvent from "./AddEvent";
import Dashboard from "./Dashboard";

function MentorDashboard() {
  const [sideLinks, setSideLink] = useState([
    {
      id: "1",
      name: "dashboard",
      opened: true,
    },
    {
      id: "2",
      name: "profile",
      opened: false,
    },
    {
      id: "3",
      name: "learning",
      opened: false,
    },
    {
      id: "4",
      name: "my story",
      opened: false,
    },
    {
      id: "5",
      name: "Add Event",
      opened: false,
    },
  ]);

  const populateData = () => {
    let content;
    sideLinks.map((sideLink) => {
      if (sideLink.opened) {
        if (sideLink.name === "profile") {
          content = <Profile />;
        } else if (sideLink.name === "learning") {
          content = <Learning />;
        } else if (sideLink.name === "dashboard") {
          content = <Dashboard />;
        } else if (sideLink.name === "my story") {
          content = <MyStory />;
        } else if (sideLink.name === "Add Event") {
          content = <AddEvent />;
        }
      }
    });
    return content;
  };

  return (
    <div className="dashboard">
      <Items setSideLinks={setSideLink} sideLinks={sideLinks} />

      {populateData()}
    </div>
  );
}

export default MentorDashboard;
