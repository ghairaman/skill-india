// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="text-light section-dark">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-12">
            <div className="d-lg-flex align-items-center justify-content-between text-center">
              {/* Address */}
              <div>
                
              </div>

              {/* Logo + Social */}
              <div>
                <img src="https://observenowevents.in/elca/delhi/img/on-logo.avif" className="w-150px" alt="AIvent logo" /><br />
                <div className="social-icons mb-sm-30 mt-4">
                  <a href="https://www.facebook.com/people/ObserveNow-Media/61573042113968/" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                  <a href="http://instagram.com/now_observe" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                  <a href="http://linkedin.com/company/observenow/" aria-label="Linkedin"><i className="fa-brands fa-linkedin" /></a>
                  <a href="https://twitter.com/ObservenowMedia" aria-label="Twitter"><i className="fa-brands fa-twitter" /></a>
                  <a href="https://www.youtube.com/@ObserveNowMedia" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
                </div>
              </div>

              {/* Contact */}
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              @ Copyright 2025 - ObserveNow Media
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
