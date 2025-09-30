import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <section id="section-who-attend"
      className="bg-dark section-dark text-light pt-80 relative jarallax"
      aria-label="section"
    >
      <img
        src="/images/lfkjslkfsfdj.png"
        className="jarallax-img"
        alt="Background"
      />
      <div className="gradient-edge-top"></div>
      <div className="gradient-edge-bottom"></div>
      <div className="sw-overlay op-8"></div>

      <div className="container relative z-4">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <div class="marquee marquee-h">
            <h2>Who Should Attend?</h2>
            <div className="marquee-wrapper" id="marqueeUP">
            <Marquee
              direction="up"
              pauseOnHover
              gradient={false}
              className="marquee-tight1"
            >
              <ul className="p-0 m-0">
                <li>Education Leaders &amp; Policymakers – shaping the future.</li>
                <li>HR &amp; L&amp;D Professionals – driving upskilling & reskilling.</li>
                <li>Corporate Leaders &amp; CXOs – seeking skilled talent.</li>
                <li>Skill Development Institutions – showcasing innovation.</li>
                <li>EdTech &amp; HRTech Companies – bridging gaps.</li>
              </ul>
            </Marquee>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
