import React from "react";
import './Event.css'

function Event({ event }) {
  const { title, description, location, date, img } = event;
  console.log(event);
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={img} alt={title} />
      </div>
      <div className="event-details">
        <h3 className="event-title">{title}</h3>
        <p className="event-description">{description}</p>
        <p className="event-location">
          <i className="fas fa-map-marker-alt"></i> {location}
        </p>
        <p className="event-date">
          <i className="far fa-calendar-alt"></i> {date}
        </p>
      </div>
    </div>
  );
}

export default Event;
