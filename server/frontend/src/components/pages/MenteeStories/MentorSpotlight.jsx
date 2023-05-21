import React from "react";
import Carousel from "react-elastic-carousel";
import './bb.css'
import Spotlight from "./Spotlight";
import mentee from "../../../assets/Images/mentee1";
import mentee1 from "../../../assets/Images/mentee";
import mentee2 from "../../../assets/Images/mentee2";
import mentee3 from "../../../assets/Images/mentee5";
import FlipCard from "./FlipCard";

const MentorSpotlight = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="mentor">
        <h1>Mentee Stories</h1>

        <div className="container">
          <Carousel>
            <Spotlight
              name="kingsley"
              location="usiu"
              text="My mentor, Kennedy Pendo, has been an invaluable guide in my software engineering journey. His vast knowledge, experience, and passion for the field have greatly influenced my growth as a developer. Kennedy's mentorship has helped me navigate through challenges, expand my technical skills, and develop a deeper understanding of software engineering principles. His patience, willingness to answer my questions, and constructive feedback have been instrumental in my learning process. I am truly grateful for Kennedy's support and guidance, and I highly recommend him as a mentor to anyone pursuing a career in software engineering."
              image={mentee}
            />

            <Spotlight
              name="Onesmus"
              location="Kenyatta university"
              text="My mentor, Kennedy Pendo, has been instrumental in my journey as a software engineering student. His deep knowledge and expertise in the field have greatly enhanced my learning experience. Kennedy has consistently provided valuable guidance, insightful feedback, and practical advice. He goes above and beyond to ensure I understand complex concepts and encourages me to explore innovative solutions. I am grateful for his dedication and mentorship, and I highly recommend Kennedy to anyone seeking guidance in software engineering."
              image={mentee1}
            />
          </Carousel>
        </div>
      </div>
      {/* the 3d flip cards */}
      <FlipCard
        image={mentee1}
        title="my title"
        role="senior frontend engineer"
      />

      <div className="mentor">
        <div className="container">
          <Carousel>
            <Spotlight
              name="Mark "
              location="Multimedia univesity"
              text="My mentor, Joyce Njimu, has had a profound impact on my cybersecurity journey. Her expertise, dedication, and guidance have been instrumental in my professional growth. Joyce's deep knowledge of the field and her ability to explain complex concepts in a clear and concise manner have greatly enhanced my understanding of cybersecurity principles. She has provided me with valuable insights, practical advice, and real-world examples that have helped me navigate the challenges of the industry. Joyce's mentorship has not only improved my technical skills but also instilled in me a sense of confidence and determination. I am truly grateful for her unwavering support and I highly recommend Joyce as a mentor to anyone aspiring to excel in the field of cybersecurity."
              image={mentee2}
            />

            <Spotlight
              name="john Mabangu"
              location="UON"
              text=" Isaac has been an exceptional project management mentor. His expertise and guidance have significantly contributed to my professional growth. He simplifies complex concepts, offers timely feedback, and creates a supportive learning environment. I highly recommend Isaac as a mentor for anyone seeking project management guidance."
              image={mentee3}
            />
          </Carousel>
        </div>
      </div>

      {/* the 3d flip cards */}
      <FlipCard
        image={mentee}
        title="my title"
        role="senior frontend engineer"
      />
    </div>
  );
};

export default MentorSpotlight;
