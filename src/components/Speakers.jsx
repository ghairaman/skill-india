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

    const $el = $("#marqueeLeft");
    try { $el.marquee("destroy"); } catch (_) {} // reset if hot-reloaded

    $el.marquee({
      direction: "left",   // “From Right To Left”
      speed: 15,
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
    <section id="speaker" style={{ padding: "32px 0 100px" }}>
      <div className="marquee marqueespeaker">
        <div className="subtitle wow fadeInUp text-dark" data-wow-delay=".0s">Past Speakers</div>
        <h2 style={{ textAlign: "center", marginBottom: 20, color: "#000" }}>Our Legand Visionaries</h2>

        <div className="marquee-wrapper" id="marqueeLeft" style={{ width: "100%", overflow: "hidden" }}>
          <ul className="flex" style={{ display: "flex", alignItems: "center", margin: 0, padding: 0 }}>
            {speakers.map((s, i) => (
              <li
                key={s.id ?? i}
                style={{
                  listStyle: "none",
                  flexShrink: 0,
                  width: 400,
                  textAlign: "center",
                  marginRight: 15,
                  position: "relative"
                }}
              >
                <img
                  src={`/speakers/${s.speakerimage}`}
                  alt={s.name}
                  style={{
                    display: "block",
                    width: 400,
                    height: 400,
                    objectFit: "cover",
                    margin: "0 auto 8px",
                  }}
                />
                <div className="speakerdetails">
                  <h4 className="speakerh4" style={{ fontWeight: 600, fontSize: 14 }}>{s.name}</h4>
                  <p className="speakerp" style={{ fontSize: 12, opacity: 0.9 }}>{withBreaks(s.designation)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
