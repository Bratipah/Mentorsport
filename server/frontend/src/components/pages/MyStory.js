import React from "react";
import { Link } from "react-router-dom";
import "./MyStory.css"


function MyStory() {
  return (
    <div>
                
    {/* <!-- ======= Breadcrumbs ======= --> */}
    <div class="breadcrumbs" data-aos="fade-in">
        <div class="container">
            <h1>Mentoring Software fees</h1>
            <i>Tailor your program to your financial need</i>
        </div>
    </div>
    {/* <!-- End Breadcrumbs --> */}

    {/* <!-- ======= Pricing Section ======= --> */}
    <section id="pricing" class="pricing">
        <div class="container" data-aos="fade-up">

            <div class="row">

                <div class="col-lg-4 col-md-6">
                    <div class="box">
                        <h3>Attempt</h3>
                        <h4><sup>$</sup>0<span> / per month</span></h4>
                        <ul>
                            <li>10 Mentorship sessions</li>
                            <li>Mentorship Meetingd</li>
                            <li class="na">One on one sessions</li>
                            <li class="na">Free Course Plan</li>
                        </ul>
                        <div class="btn-wrap">
                            <Link class="btn-buy" to="../pages/Login.js">Register</Link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                    <div class="box featured">
                        <h3>Businnes Plan</h3>
                        <h4><sup>$</sup>19<span> / per month</span></h4>
                        <ul>
                            <li>50 Mentorship sessions</li>
                            <li>Mentorship Meetingd</li>
                            <li class="na">One on one sessions</li>
                            <li class="na">Free Course Plan</li>
                        </ul>
                        <div class="btn-wrap">
                            <Link class="btn-buy" to="../pages/Login.js"> Register</Link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                    <div class="box">
                        <span class="advanced">Limitsiz</span>
                        <h3>Unlimited Usage </h3>
                        <h4><sup>$</sup>49<span> / per month</span></h4>
                        <ul>
                            <li>Unlimited Mentorship sessions</li>
                            <li>Mentorship Meetingd</li>
                            <li>One on one sessions</li>
                            <li>Free Course Plan</li>
                        </ul>
                        <div class="btn-wrap">
                            <Link class="btn-buy" to="/RegisterOption"> Register</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
    {/* <!-- End Story Section --> */}
</div>
  )
}

export default MyStory;
