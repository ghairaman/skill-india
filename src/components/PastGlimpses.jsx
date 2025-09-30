// src/components/PastGlimpses.jsx
const col1 = [
  "https://observenowevents.in/elca/delhi/img/g1.jpg",
  "https://observenowevents.in/elca/delhi/img/g2.jpg",
  "https://observenowevents.in/elca/delhi/img/g3.jpg",
  "https://observenowevents.in/elca/delhi/img/g4.jpg",
  "https://observenowevents.in/elca/delhi/img/g5.jpg",
  "https://observenowevents.in/elca/delhi/img/g6.jpg",
  "https://observenowevents.in/elca/delhi/img/g7.jpg",
  "https://observenowevents.in/elca/delhi/img/g8.jpg",
  "https://observenowevents.in/elca/delhi/img/g9.jpg",
  "https://observenowevents.in/elca/delhi/img/g10.jpg",
  "https://observenowevents.in/elca/delhi/img/g11.jpg",
  "https://observenowevents.in/elca/delhi/img/g12.jpg",
];

const col2 = [
  "https://observenowevents.in/elca/delhi/img/g24.jpg",
  "https://observenowevents.in/elca/delhi/img/g25.jpg",
  "https://observenowevents.in/elca/delhi/img/g26.jpg",
  "https://observenowevents.in/elca/delhi/img/g27.jpg",
  "https://observenowevents.in/elca/delhi/img/g28.jpg",
  "https://observenowevents.in/elca/delhi/img/g29.jpg",
  "https://observenowevents.in/elca/delhi/img/g30.jpg",
  "https://observenowevents.in/elca/delhi/img/g31.jpg",
  "https://observenowevents.in/elca/delhi/img/g32.jpg",
  "https://observenowevents.in/elca/delhi/img/g33.jpg",
  "https://observenowevents.in/elca/delhi/img/g34.jpg",
  "https://observenowevents.in/elca/delhi/img/g35.jpg",
  "https://observenowevents.in/elca/delhi/img/g36.jpg",
];

const col3 = [
  "https://observenowevents.in/elca/delhi/img/g12.jpg",
  "https://observenowevents.in/elca/delhi/img/g25.jpg",
  "https://observenowevents.in/elca/delhi/img/g26.jpg",
  "https://observenowevents.in/elca/delhi/img/g27.jpg",
  "https://observenowevents.in/elca/delhi/img/g28.jpg",
  "https://observenowevents.in/elca/delhi/img/g29.jpg",
  "https://observenowevents.in/elca/delhi/img/g30.jpg",
  "https://observenowevents.in/elca/delhi/img/g31.jpg",
  "https://observenowevents.in/elca/delhi/img/g32.jpg",
  "https://observenowevents.in/elca/delhi/img/g33.jpg",
  "https://observenowevents.in/elca/delhi/img/g34.jpg",
  "https://observenowevents.in/elca/delhi/img/g35.jpg",
  "https://observenowevents.in/elca/delhi/img/g36.jpg",
  "https://observenowevents.in/elca/delhi/img/g1.jpg",
  "https://observenowevents.in/elca/delhi/img/g2.jpg",
  "https://observenowevents.in/elca/delhi/img/g3.jpg",
  "https://observenowevents.in/elca/delhi/img/g4.jpg",
  "https://observenowevents.in/elca/delhi/img/g5.jpg",
  "https://observenowevents.in/elca/delhi/img/g6.jpg",
  "https://observenowevents.in/elca/delhi/img/g7.jpg",
  "https://observenowevents.in/elca/delhi/img/g8.jpg",
  "https://observenowevents.in/elca/delhi/img/g9.jpg",
  "https://observenowevents.in/elca/delhi/img/g10.jpg",
  "https://observenowevents.in/elca/delhi/img/g11.jpg",
];

const col4 = [
  "https://observenowevents.in/elca/delhi/img/g4.jpg",
  "https://observenowevents.in/elca/delhi/img/g5.jpg",
  "https://observenowevents.in/elca/delhi/img/g8.jpg",
  "https://observenowevents.in/elca/delhi/img/g9.jpg",
  "https://observenowevents.in/elca/delhi/img/g1.jpg",
  "https://observenowevents.in/elca/delhi/img/g2.jpg",
  "https://observenowevents.in/elca/delhi/img/g3.jpg",
  "https://observenowevents.in/elca/delhi/img/g10.jpg",
  "https://observenowevents.in/elca/delhi/img/g11.jpg",
  "https://observenowevents.in/elca/delhi/img/g6.jpg",
  "https://observenowevents.in/elca/delhi/img/g7.jpg",
  "https://observenowevents.in/elca/delhi/img/g12.jpg",
];

function VerticalMarqueeColumn({ images, reverse = false, duration = 30 }) {
  // Duplicate the list to create a seamless loop
  const track = [...images, ...images];

  return (
    <div className="vm-col">
      <div
        className={`vm-track ${reverse ? "vm-reverse" : ""}`}
        style={{ "--dur": `${duration}s` }}
      >
        {track.map((src, i) => (
          <div className="vm-item" key={`${src}-${i}`}>
            <img src={src} alt={`glimpse-${i}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PastGlimpses() {
  return (
    <section className="choose-one">
      <div className="container-fluid">
        <div className="sec-title style-two centered">
          <h2 className="sec-title_heading">Past Glimpses</h2>
        </div>

        <div className="row clearfix">
          {/* Match your 4 columns (each max-height ~600px, overflow hidden) */}
          <div className="counter-block_one col-lg-3 col-6">
            <VerticalMarqueeColumn images={col1} reverse={false} duration={28} />
          </div>
          <div className="counter-block_one col-lg-3 col-6">
            <VerticalMarqueeColumn images={col2} reverse={true} duration={32} />
          </div>
          <div className="counter-block_one col-lg-3 col-6">
            <VerticalMarqueeColumn images={col3} reverse={false} duration={30} />
          </div>
          <div className="counter-block_one col-lg-3 col-6">
            <VerticalMarqueeColumn images={col4} reverse={true} duration={26} />
          </div>
        </div>
      </div>
    </section>
  );
}
