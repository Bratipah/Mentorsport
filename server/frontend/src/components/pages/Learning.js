import React from "react";
import Learn from "../../assets/Images/cybersec.jpeg"
import Learn1 from "../../assets/Images/react-class-lifecycle-flochart.png"
import Learn2 from "../../assets/Images/Architecture_AWS_static_files_part_3_jJsy46k_medium_fit.png"
import Learn3 from "../../assets/Images/markdown-1-markup.png"
import Learn4 from "../../assets/Images/screenshotdevelopers.jpg"
import "./Learning.css"
function Learning() {
  return (
  <div>
  {/* <!-- ======= Breadcrumbs ======= --> */}
  <div class="breadcrumbs" data-aos="fade-in">
      <div class="container">
          <h1>Learning</h1>
          <i>Check out different Courses available</i>
      </div>
  </div>
  {/* <!-- End Breadcrumbs --> */}

  <section id="ScreenShot">
      <div class="container">

          <div class="row p-3">
              <div class="col-lg-8 order-1 order-lg-2">
                  <img src={Learn1} class="img-fluid"
                      alt="MentorMart" />
              </div>
              <div class="col-lg-4 pt-4 pt-lg-0 order-2 order-lg-1">
                  <h2 class="text-center mt-5">Web development</h2>
                  <p class="mt-5">
                     React Hooks- State Management Library
                  </p>
              </div>
          </div>

          <div class="row mt-5 p-3">
              <div class="col-lg-8 order-2 order-lg-1">
                  <img src={Learn} class="img-fluid"
                      alt="MentorMart" />
              </div>
              <div class="col-lg-4 pt-4 pt-lg-0 order-1 order-lg-2">
                  <h2 class="text-center mt-5">Cybesecurity.</h2>
                  <p class="mt-5">
                    Pentesting vulnerablities
                  </p>
              </div>
          </div>

          <div class="row mt-5 p-3">
              <div class="col-lg-8 order-1 order-lg-2">
                  <img src={Learn2}class="img-fluid"
                      alt="MentorSport" />
              </div>
              <div class="col-lg-4 pt-4 pt-lg-0 order-2 order-lg-1">
                  <h2 class="text-center mt-5">Web development</h2>
                  <p class="mt-5">
                    Django development load balancing                  </p>
              </div>
          </div>

          <div class="row mt-5 p-3">
              <div class="col-lg-8 order-2 order-lg-1">
                  <img src={Learn4} class="img-fluid"
                      alt="MentorMart" />
              </div>
              <div class="col-lg-4 pt-4 pt-lg-0 order-1 order-lg-2">
                  <h2 class="text-center mt-5">Note Taking</h2>
                  <p class="mt-5">
                  Notes for your mentees, schedule work times, and upload resource files
                  </p>
              </div>
          </div>

          <div class="row mt-5 p-3">
              <div class="col-lg-8 order-1 order-lg-2">
                  <img src={Learn3} class="img-fluid"
                      alt="MentorMart" />
              </div>
              <div class="col-lg-4 pt-4 pt-lg-0 order-2 order-lg-1">
                  <h2 class="text-center mt-5">Technical writing</h2>
                  <p class="mt-5">
                     Markdown Documentation
                  </p>
              </div>
          </div>

      </div>
  </section>
</div>
)
}

export default Learning;
