// src/components/Testimonials.jsx
import { useRef, useState } from "react";

export default function Testimonials() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="cta-two testimonial">
      <div className="container">
        <div className="inner-container">
          <div className="row clearfix">
            {/* Left Box */}
            <div className="cta-two_title-column col-lg-7 col-md-12 col-sm-12">
              <div className="cta-two_title-outer">
                <div className="sec-title style-two light">
                  <h2 className="sec-title_heading-test texton biggest">
                    Industry Testimonials
                  </h2>
                  <div className="sec-title_text">
                    Our experience with ObserveNow has been nothing short of
                    exceptional. From the seamless event execution to the
                    insightful discussions and valuable networking, everything
                    was thoughtfully curated. The platform brought together some
                    of the brightest minds in the industry.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box */}
            <div className="cta-two_image-column col-lg-5 col-md-12 col-sm-12">
              <div className="cta-two_image-outer text-center">
                <video
                  ref={videoRef}
                  id="testimonialVideo"
                  poster="/img/banner1.avif"
                  width="100%"
                  height="100%"
                  autoPlay
                  playsInline
                  loop
                  muted={muted}
                  className="banner-img"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "300px",
                    maxHeight: "500px",
                    objectFit: "cover",
                    width: "auto",
                    marginTop: "-130px",
                    borderRadius: "6%",
                    border: "10px solid #000",
                    minWidth: "auto",
                  }}
                >
                  <source src="/images/testimonial.mp4" type="video/mp4" />
                </video>
                <button className="mutebutton" onClick={toggleMute}>
                  {muted ? "🔇" : "🔊"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
