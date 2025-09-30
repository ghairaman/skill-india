// src/components/Numbers.jsx
export default function Numbers() {
  return (
    <section className="section-light bg-light p-0" aria-label="section">
      {/* First marquee line */}
      <div className="bg-color text-light d-flex py-4 lh-1 rot-2">
        <div
          className="de-marquee-list-1 wow fadeInLeft"
          data-wow-duration="3s"
        >
          <span className="fs-60 mx-3">100+ SPEAKERS</span>
          <span className="fs-60 mx-3 op-2">/</span>
          <span className="fs-60 mx-3">30+ PARTNERS</span>
          <span className="fs-60 mx-3 op-2">/</span>
          <span className="fs-60 mx-3">500+ DELEGATES</span>
          <span className="fs-60 mx-3 op-2">/</span>
          <span className="fs-60 mx-3">10+ GOVERNMENT LEADERS</span>
          <span className="fs-60 mx-3 op-2">/</span>
          <span className="fs-60 mx-3">50+ AWARD CATEGORIES</span>
          <span className="fs-60 mx-3 op-2">/</span>
        </div>
      </div>

      {/* Second marquee line */}
      <div className="bg-color-2 text-light d-flex py-4 lh-1 rot-min-1 mt-min-20">
        <div
          className="de-marquee-list-2 wow fadeInRight"
          data-wow-duration="3s"
        >
          <span className="fs-60 mx-3">100+ SPEAKERS</span>
          <span className="fs-60 mx-3 op-2">/</span>
          <span className="fs-60 mx-3">30+ PARTNERS</span>
          <span className="fs-60 mx-3 op-2">/</span>
          <span className="fs-60 mx-3">500+ DELEGATES</span>
          <span className="fs-60 mx-3 op-2">/</span>
          <span className="fs-60 mx-3">10+ GOVERNMENT LEADERS</span>
          <span className="fs-60 mx-3 op-2">/</span>
          <span className="fs-60 mx-3">50+ AWARD CATEGORIES</span>
          <span className="fs-60 mx-3 op-2">/</span>
        </div>
      </div>
    </section>
  );
}
