// src/components/ContactInfo.jsx
export default function ContactInfo() {
  // Reuse one background image style for the cards
  const cardBg = {
    background: "url(/images/contact-us.gif) no-repeat center / cover",
  };

  return (
    <section className="blog-two-area contactussection pb-120">
      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              For More Information
            </h2>
          </div>

          
        </div>

        <div className="row justify-content-center g-4">
          {/* Card 1 */}
          <div className="col-lg-6">
            <div
              className="blog-two__list-item mb-30 wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
              style={cardBg}
            >
              <div className="blog__content">
                <h5>
                  <a className="primary-hover">For Partnership Opportunities</a>
                </h5>
                <h3>
                  <a className="primary-hover">Sumit Rawat</a>
                </h3>

                <div className="about__info mt-20">
                  <div className="d-flex gap-2 align-items-center">
                    <img src="/images/phone.png" alt="phone" />
                    <div className="info">
                      <a href="mailto:sumit@observenow.com" className="primary-color fvb">
                        sumit@observenow.com
                      </a>
                      <h5>+91 8979691125</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-6">
            <div
              className="blog-two__list-item mb-30 wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
              style={cardBg}
            >
              <div className="blog__content">
                <h5>
                  <a className="primary-hover">For Partnership Opportunities</a>
                </h5>
                <h3>
                  <a className="primary-hover">Shubham Rastogi</a>
                </h3>

                <div className="about__info mt-20">
                  <div className="d-flex gap-2 align-items-center">
                    <img src="/images/phone.png" alt="phone" />
                    <div className="info">
                      <a href="mailto:shubham@observenow.com" className="primary-color fvb">
                        shubham@observenow.com
                      </a>
                      <h5>+91 7906680658</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-6">
            <div
              className="blog-two__list-item mb-30 wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
              style={cardBg}
            >
              <div className="blog__content">
                <h5>
                  <a className="primary-hover">For Speaking Opportunities</a>
                </h5>
              <h3>
                  <a className="primary-hover">Garvita Taneja</a>
                </h3>

                <div className="about__info mt-20">
                  <div className="d-flex gap-2 align-items-center">
                    <img src="/images/phone.png" alt="phone" />
                    <div className="info">
                      <a href="mailto:garvita@observenow.com" className="primary-color fvb">
                        garvita@observenow.com
                      </a>
                      <h5>+91 9311431985</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Card 3 */}
        </div>
      </div>
    </section>
  );
}
