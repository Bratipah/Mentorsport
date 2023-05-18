import React from "react";
import Carousel from "react-elastic-carousel";
import './bb.css'
import Spotlight from "./Spotlight";
import sampevent from "../../../assets/Images/event1.jpeg";
import sampevent1 from "../../../assets/Images/event2.jpeg";
import sampevent2 from "../../../assets/Images/event3.jpeg";
import FlipCard from "./FlipCard";

const MentorSpotlight = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="mentor">
        <h1>Events</h1>

        <div className="container">
          <Carousel>
            <Spotlight
              name="web design & development"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampevent}
            />

            <Spotlight
              name="Enterpreneurship & Technology"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampevent1}
            />
            <Spotlight
              name="Cybersecurity"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampevent2}
            />
          </Carousel>
        </div>
      </div>
      {/* the 3d flip cards */}
      <FlipCard
        image={sampImg2}
        title="my title"
        role="senior frontend engineer"
      />

      <div className="mentor">
        <div className="container">
          <Carousel>
            <Spotlight
              name=""
              location="John Mabangu"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampevent}
            />

            <Spotlight
              name="chike agnes"
              location="John Mabangu"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampevent1}
            />
            <Spotlight
              name="chike agnes"
              location="zJohn Mabangu"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampevent2}
            />

          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MentorSpotlight;
