/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../css/Home.css";
import "../App.css";
import img1 from "../Img/okta-girl mpi.jpg";
import img2 from "../Img/signature.png";

function Home() {
  return (
    <>
      <div class="e-con-inner-photo">
        <div class="button-boxed">
          <button type="button" class="btn btn-light">
            Home page / About
          </button>
        </div>
      </div>

      {/* diana start */}
      <div class="diana-image ">
        <div class="container">
          <div class="d-l-c-r row ">
            <div class="diana-image-left col-lg-3 col-md-12 col-sm-12 align-content-center ">
              <h1>welcome! </h1>
              <div class="btn-parent">
                <button type="button" class="btn btn-outline-warning rounded">
                  Get A Quote
                </button>
              </div>
            </div>
            <div class="diana-image-center col-lg-6 col-md-12 col-sm-12 pt-5 pb-5">
              <p class="okta-content">
                Lorem ipsum dolor sit abet, consectetur adipisicing edit, sed do
                elusion tempo incident ut labor.
              </p>

              <p class="okta-c">
                Dais ante inure dolor in reprehended in volute veldt esse cilium
                dolore fugit null pariah. Excepted sint o_creat cupidity non
                point, suns in culpa qui officio deferent mollit anim est labor
                sed ut perspiciatis Under OmniOS istle ants error sit voluptatem
                accusant doloremque.
              </p>
            </div>
            <div class="diana-image-right col-lg-3 col-md-12 cil-sm-12 text-center">
              <div class="girl-pic">
                <img src={img1} />
                <h4>Diana T. Davis</h4>
              </div>

              <div class="g-signature">
                <img src={img2} />
              </div>
            </div>
          </div>
        </div>
        {/* animation */}

        <div class="bubble ">
          <div class="row justify-content-center">
            <div class="co-lg-4"></div>
          </div>
        </div>
      </div>

      {/* okay-card */}

      <div class="row Okla-cards">
        <div class="col-lg-3 col-md-6 col-sm-12 p-0 Okla-item-title">
          <div class="card h-100 text-center text-light first">
            <div class="card-body">
              <div class="card-body-section">
                <h3 class="about-contact">How It Works</h3>
                <div class="explosion-outer d-flex ">
                  <div class="explosion-button" id="playButton">
                    <div class="white-flash"></div>
                    <div class="play-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="50"
                        height="50"
                      >
                        <path d="M8 5v14l11-7z" fill="red"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p class="card-text mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 p-0 Okla-item-title-parent-child">
          <div class="card h-100 text-center text-light secound">
            <div class="card-body">
              <div class="card-body-section">
                <span class="about-card-contact">01.</span>
                <h3 class="card-title mt-2">Project Planning</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 p-0 Okla-item-title-child">
          <div class="card h-100 text-center text-light third">
            <div class="card-body">
              <div class="card-body-section">
                <span class="about-card-contact">02.</span>
                <h3 class="card-title mt-2">Research & Analysis</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 p-0 Okla-item">
          <div class="card h-100 text-center text-light four">
            <div class="card-body">
              <div class="card-body-section">
                <span class="about-card-contact">03.</span>
                <h3 class="card-title mt-2">Business Launch</h3>

                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* octan card end */}
    </>
  );
}

export default Home;
