import React from "react";
import Carousel from "react-elastic-carousel";
import './bb.css'
import Spotlight from "./Spotlight";
import mentor1 from "../../../assets/Images/mentor1.jpeg";
import mentor2 from "../../../assets/Images/mentor2.jpeg";
import mentor3 from "../../../assets/Images/img2.jpg";
import FlipCard from "./FlipCard";

const MentorSpotlight = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="mentor">
        <h1>Mentors' spotlight</h1>

        <div className="container">
          <Carousel>
          <Spotlight
              name="Neema James"
              location="Kalimax africa"
              text="Hudson Sitati, a dedicated and motivated student, has shown great potential as a mentee in the field of digital marketing. Throughout our mentorship journey, I have witnessed Hudson's eagerness to learn his ability to apply new concepts effectively. He actively seeks feedback and consistently demonstrates a growth mindset. Hudson's passion for digital marketing, coupled with his determination to excel, makes him a promising mentee. I have no doubt that with continued guidance and support, Hudson Sitati will achieve remarkable success in his digital marketing career."
              image={mentor3}
            />
            <Spotlight
              name="Kennedy Pendo"
              location="alenx TechSolutions"
              text="Sydney Baraka, my mentee in software engineering, has been an absolute pleasure to work with. Their enthusiasm for learning and commitment to their craft are truly commendable. Sydney consistently demonstrates a solid grasp of software engineering concepts and applies them effectively in their projects. I am impressed by their ability to tackle complex problems and their proactive approach in seeking guidance and feedback. With Sydney's dedication and skills, I am confident they will excel in their software engineering career. It is a privilege to be their mentor and witness their growth and progress in the field."
              image={mentor2}
            />
          </Carousel>
        </div>
      </div>
      {/* the 3d flip cards */}
      <FlipCard
        image={mentor2}
        title="my title"
        role="senior frontend engineer"
      />   
        <div className="mentor">
      <div className="container">
      <Carousel>
      <Spotlight
          name="james neema"
          location="zumi africa"
          text="Hudson Sitati, a dedicated and motivated student, has shown great potential as a mentee in the field of digital marketing. Throughout our mentorship journey, I have witnessed Hudson's eagerness to learn his ability to apply new concepts effectively. He actively seeks feedback and consistently demonstrates a growth mindset. Hudson's passion for digital marketing, coupled with his determination to excel, makes him a promising mentee. I have no doubt that with continued guidance and support, Hudson Sitati will achieve remarkable success in his digital marketing career."
          image={mentor1}
        />
        <Spotlight
          name="Kennedy Pendo"
          location="alenx TechSolutions"
          text="Sydney Baraka, my mentee in software engineering, has been an absolute pleasure to work with. Their enthusiasm for learning and commitment to their craft are truly commendable. Sydney consistently demonstrates a solid grasp of software engineering concepts and applies them effectively in their projects. I am impressed by their ability to tackle complex problems and their proactive approach in seeking guidance and feedback. With Sydney's dedication and skills, I am confident they will excel in their software engineering career. It is a privilege to be their mentor and witness their growth and progress in the field."
          image={mentor2}
        />
      </Carousel>
    </div>
  </div>



  

      {/* the 3d flip cards */}
    </div>
  );
};

export default MentorSpotlight;
