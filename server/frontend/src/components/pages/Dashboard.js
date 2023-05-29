import React from "react";
import '../../App.css';
import HomeDashboard from '../HomeDashboard';
import Footer from '../Footer';
import mentor1 from "../../assets/Images/mentee1.jpeg";
import mentor2 from "../../assets/Images/mentor2.jpeg";
import mentor3 from "../../assets/Images/img2.jpg";
import menteeOne from "../../assets/Images/mentee1.jpeg";
import menteeTwo from "../../assets/Images/mentee2.jpeg";
import menteeThree from "../../assets/Images/mentee5.jpeg";

export default function Dashboard() {
  return (<>
  <HomeDashboard />
          <div>
                <div class="breadcrumbs">
                    <div class="container">
                        <h1>Meet your available Mentors & Mentees</h1>
                    </div>
                </div>

                <section id="trainers" class="trainers">
                    <div class="container" data-aos="fade-up">

                        <div class="row" data-aos="zoom-in" data-aos-delay="100">

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Employee Mentoring</h2>
                                        <hr />
                                        <img src={mentor1} class="img-fluid" alt="Employee" />
                                        <h4>
                                        For Companies or Government Agencies
                                        </h4>
                                        <div class = "links">
                                          <ul>
                                            <a href="#">
                                              <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-youtube"></i>
                                            </a>
                                          </ul>
                                        </div> 
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Entrepreneur Mentoring</h2>
                                        <hr />
                                        <img src={mentor2} class="img-fluid" alt="Entrepreneur" />
                                        <h4>
                                        For Innovation Incubators
                                        </h4>
                                        <div class = "links">
                                          <ul>
                                            <a href="#">
                                              <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-youtube"></i>
                                            </a>
                                          </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Student Mentoring</h2>
                                        <hr />
                                        <img src={mentor3} class="img-fluid" alt="Student" />
                                        <h4>
                                        For Universities work life learning balance
                                        </h4>
                                        <div class = "links">
                                          <ul>
                                            <a href="#">
                                              <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-youtube"></i>
                                            </a>
                                          </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Web developer Mentee</h2>
                                        <hr />
                                        <img src={menteeOne} class="img-fluid" alt="Reverse" />
                                        <h4>
                                            Interested in Growth Mindset
                                        </h4>
                                        <div class = "links">
                                          <ul>
                                            <a href="#">
                                              <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-youtube"></i>
                                            </a>
                                          </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>Cybersec enthusiast</h2>
                                        <hr />
                                        <img src={menteeThree} class="img-fluid" alt="Women" />
                                        <h4>
                                            Aims to be a SOC analyst in 3 months
                                        </h4>
                                        <div class = "links">
                                          <ul>
                                            <a href="#">
                                              <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-youtube"></i>
                                            </a>
                                          </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="member">
                                    <div class="member-content">
                                        <h2>University Starte</h2>
                                        <hr />
                                        <img src={menteeTwo} class="img-fluid" alt="Group" />
                                        <h4>
                                            Interested to step into the world of Programming
                                        </h4>
                                        <div class = "links">
                                          <ul>
                                            <a href="#">
                                              <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href="#">
                                              <i class="fab fa-youtube"></i>
                                            </a>
                                          </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </section>
            </div>

  <Footer />
</>);
}
