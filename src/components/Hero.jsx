// src/components/Hero.jsx
import ExpressInterestButton from "./ExpressInterestButton";

export default function Hero() {
  return (
    <section
      id="section-hero"
      className="section-dark no-top no-bottom text-light jarallax relative section-hero mh-800 mobilehide"
      data-video-src="mp4:/video/waves.mp4"
    >
      <div className="gradient-edge-top h-50 color"></div>
      <div className="gradient-edge-bottom"></div>
      <div className="sw-overlay sw-overlayhero"></div>

      <div className="abs abs-centered z-2 w-80">
        <div className="container wow scaleIn" data-wow-duration="3s">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="fs-120 text-uppercase fs-sm-12vw mb-4 lh-1">
                <img src="/images/skill-logo.png" alt="AIvent" style={{ width: "65%" }} />
              </h1>

              <div className="d-block d-md-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center mx-4">
                  <i className="fa fa-calendar id-color me-3" aria-hidden="true"></i>
                  <h4 className="mb-0 text-dark">February 13th, 2026</h4>
                </div>

                <div className="d-flex justify-content-center align-items-center mx-4">
                  <i className="fa fa-location-pin id-color me-3" aria-hidden="true"></i>
                  <h4 className="mb-0 text-dark">New Delhi, India</h4>
                </div>
              </div>

              <div className="spacer-single"></div>

              <ExpressInterestButton />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
