// src/components/Venue.jsx
export default function Venue() {
  return (
    <section
      id="section-venue"
      className="bg-dark section-dark text-light pt-80 relative jarallax"
      aria-label="section"
    >
      <div className="container relative z-2">
        {/* Title */}
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="subtitle wow fadeInUp" data-wow-delay=".0s">
              Event Location
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Location &amp; Venue
            </h2>
            <p className="lead wow fadeInUp" data-wow-delay=".6s">
              Hotel will be discloused comming soon,<br />New Delhi, India
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="row g-4">
          <div className="col-sm-6">
            <img
              src="/images/newdelhi.gif"
              className="w-100 rounded-1 wow scale-in-mask"
              alt="Venue exterior"
            />
          </div>

          <div className="col-sm-6">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56046.55554122999!2d77.18167510158268!3d28.602485026174293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1759142008861!5m2!1sen!2sin"
            width="626"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="New Delhi Map"
            />
          </div>

          <div className="clearfix"></div>

        </div>
      </div>
    </section>
  );
}
