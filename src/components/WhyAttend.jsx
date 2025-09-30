// src/components/WhyAttend.jsx
export default function WhyAttend() {
  return (
    <section id="section-why-attend" className="bg-light section-light text-dark">
      <div className="container">
        {/* Title */}
        <div className="row g-4">
          <div className="col-lg-6 offset-lg-3 text-center">
            <div className="subtitle wow fadeInUp mb-3">Why Attend</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Why Should You Attend?
            </h2>
            <p className="lead mb-0 wow fadeInUp">
              Hear from global AI pioneers, industry disruptors, and bold thinkers shaping the future across every domain.
            </p>
          </div>
        </div>

        <div className="spacer-single"></div>

        {/* Cards */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="hover">
              <div className="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                <div className="abs absextend p-40 bottom-0 z-2">
                  <div className="relative wow fadeInUp">
                    <h4>Gain insights into emerging skill trends shaping India’s workforce.</h4>
                  </div>
                </div>
                <div className="gradient-edge-bottom h-100"></div>
                <img src="/images/wh1.jpg" className="w-100 hover-scale-1-1" alt="Why Attend 1" />
                <div className="abs absextend w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="hover">
              <div className="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                <div className="abs absextend p-40 bottom-0 z-2">
                  <div className="relative wow fadeInUp">
                    <h4>Network with 200+ Education Leaders, 150+ HR Leaders, and CXOs from across industries.</h4>
                  </div>
                </div>
                <div className="gradient-edge-bottom h-100"></div>
                <img src="/images/wh2.jpg" className="w-100 hover-scale-1-1" alt="Why Attend 2" />
                <div className="abs absextend w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="hover">
              <div className="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                <div className="abs absextend p-40 bottom-0 z-2">
                  <div className="relative wow fadeInUp">
                    <h4>Learn how skilling, upskilling, and reskilling can future-proof organizations.</h4>
                  </div>
                </div>
                <div className="gradient-edge-bottom h-100"></div>
                <img src="/images/wh3.jpg" className="w-100 hover-scale-1-1" alt="Why Attend 3" />
                <div className="abs absextend w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-4 col-md-6">
            <div className="hover">
              <div className="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                <div className="abs absextend p-40 bottom-0 z-2">
                  <div className="relative wow fadeInUp">
                    <h4>Explore collaboration opportunities between academia, corporates, and government.</h4>
                  </div>
                </div>
                <div className="gradient-edge-bottom h-100"></div>
                <img src="/images/wh4.jpg" className="w-100 hover-scale-1-1" alt="Why Attend 4" />
                <div className="abs absextend w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-lg-4 col-md-6">
            <div className="hover">
              <div className="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                <div className="abs absextend p-40 bottom-0 z-2">
                  <div className="relative wow fadeInUp">
                    <h4>Experience thought-provoking panel discussions, keynote addresses, and success stories.</h4>
                  </div>
                </div>
                <div className="gradient-edge-bottom h-100"></div>
                <img src="/images/wh5.jpg" className="w-100 hover-scale-1-1" alt="Why Attend 5" />
                <div className="abs absextend w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-lg-4 col-md-6">
            <div className="hover">
              <div className="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                <div className="abs absextend p-40 bottom-0 z-2">
                  <div className="relative wow fadeInUp">
                    <h4>Be part of a movement to position India as a global skills leader.</h4>
                  </div>
                </div>
                <div className="gradient-edge-bottom h-100"></div>
                <img src="/images/wh6.jpg" className="w-100 hover-scale-1-1" alt="Why Attend 6" />
                <div className="abs absextend w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
