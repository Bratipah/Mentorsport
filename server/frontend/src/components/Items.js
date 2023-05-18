import React from "react";
import { Link } from "react-router-dom";
import "./items.css";
import { MdDashboard, MdMenuBook, MdPerson, MdEvent } from "react-icons/md";

function Items({ sideLinks, setSideLinks }) {
  const onClickHandler = (name) => {
    setSideLinks((prevState) => {
      return prevState.map((sideLink) => {
        if (sideLink.name === name) {
          return {
            ...sideLink,
            opened: true,
          };
        } else {
          return { ...sideLink, opened: false };
        }
      });
    });
  };
  return (
    <div className="itemsContainer">
      <div className="itemsWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdDashboard className="sidebarIcon" />
            <Link
              to="#"
              className="links"
              onClick={() => onClickHandler("dashboard")}
            >
              Dashboard
            </Link>
          </li>
          <li className="sidebarListItem">
            <MdPerson className="sidebarIcon" />
            <Link
              className="links"
              to="#"
              onClick={() => onClickHandler("profile")}
            >
              My Profile
            </Link>
          </li>
          <li className="sidebarListItem">
            <MdMenuBook className="sidebarIcon" />
            <Link
              className="links"
              to="#"
              onClick={() => onClickHandler("learning")}
            >
              learning
            </Link>
          </li>
          <li className="sidebarListItem">
            <MdMenuBook className="sidebarIcon" />
            <Link
              to="#"
              className="links"
              onClick={() => onClickHandler("my story")}
            >
              My Story
            </Link>
          </li>

          <li className="sidebarListItem">
            <MdEvent className="sidebarIcon" />
            <Link
              className="links"
              to="#"
              onClick={() => onClickHandler("Add Event")}
            >
              Add Event
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Items;
