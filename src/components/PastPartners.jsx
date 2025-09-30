import { useEffect, useState, Fragment } from "react";

function withBreaks(text) {
  const parts = String(text ?? "").split(/<br\s*\/?>|\r\n|\n|\r/);
  return parts.map((p, i) => (
    <Fragment key={i}>
      {p}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ));
}

export default function SpeakersJQMarquee() {
  const [speakers, setSpeakers] = useState([]);
const logos = [
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/icfai.png",       width: "88%",  pad: "7px 10px 0" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/anurag1.png",     width: "88%",  pad: "7px 10px 0" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/silver-partner.jpg", width: "100%", pad: "15px 10px 0" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/d2l-partner.png", width: "85%",  pad: "15px 0 0" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/canon.jpeg",      width: "95%",  pad: "3px 30px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/peoplelink.jpeg", width: "95%",  pad: "24px 5px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/employee1.png",   width: "56%",  pad: "13px 5px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/codetantra.png",  width: "92%",  pad: "39px 5px 58px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/vmart.png",       width: "60%",  pad: "4px 5px 5px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/yourdost1.png",   width: "77%",  pad: "0 5px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/virohan.png",     width: "95%",  pad: "42px 5px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/parasoft.png",    width: "73%",  pad: "0 5px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/edm.jpeg",        width: "77%",  pad: "0 5px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/sai-logo.png",    width: "90%",  pad: "23px 5px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/MRUH.png",        width: "88%",  pad: "0 5px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/mgood.png",       width: "100%", pad: "7px 5px" },
  { src: "https://observenowevents.in/elca/hyderabad/assets/images/strides.avif",    width: "70%",  pad: "0 5px" },
];
  // Load speakers from /public/speaker.json
  useEffect(() => {
    fetch("/speaker.json")
      .then((r) => r.json())
      .then((d) => setSpeakers(Array.isArray(d) ? d : d.speakers || []))
      .catch(() => setSpeakers([]));
  }, []);

  // Initialize jQuery marquee after items render
  useEffect(() => {
    const $ = window.jQuery;
    if (!speakers.length || !($ && $.fn && $.fn.marquee)) return;

    const $el = $("#marqueeRight");
    try { $el.marquee("destroy"); } catch (_) {} // reset if hot-reloaded

    $el.marquee({
      direction: "right",   // “From Right To Left”
      speed: 70,
      spaceBetween: 15,
      pauseOnHover: true,  // official
      pausehover: true,    // also accept demo’s option name
      duplicated: true,    // seamless loop
      gap: 0,
      delayBeforeStart: 0,
      startVisible: true
    });

    return () => { try { $el.marquee("destroy"); } catch (_) {} };
  }, [speakers.length]);

  return (
    <section id="pastpartners" style={{ padding: "32px 0 100px" }}>
      <div className="marquee marqueepartner">
        <div className="subtitle wow fadeInUp text-dark" data-wow-delay=".0s">Past Partners</div>
        <h2 style={{ textAlign: "center", marginBottom: 20, color: "#000" }}>Our Corporate Partners</h2>

        <div className="marquee-wrapper" id="marqueeRight" style={{ width: "100%", overflow: "hidden" }}>
          <ul className="flex" style={{ display: "flex", alignItems: "center", margin: 0, padding: 0 }}>
            {logos.map((l, i) => (
                <li
                key={i}>
                <img
                key={i}
                src={l.src}
                alt={`logo-${i}`}
                loading="lazy"
                />
                </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
