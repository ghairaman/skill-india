// src/components/Header.jsx
import ExpressInterestButton from "./ExpressInterestButton";

export default function Header() {
  return (
    <header className="transparent">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex">
              <div className="de-flex-col d-none">
                {/* logo begin */}
                <div id="logo">
                  <a href="index.html">
                    <img className="logo-main" src="/images/logo-w-top.png" alt="AIvent logo" />
                    <img className="logo-scroll" src="/images/logo-w-top.png" alt="AIvent logo" />
                    <img className="logo-mobile" src="/images/logo-w-top.png" alt="AIvent logo" />
                  </a>
                </div>
                {/* logo close */}
              </div>

              <div className="de-flex-col">
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <a className="menu-item active" href="#section-hero">Home</a>
                    </li>

                    <li><a className="menu-item" href="#section-about">About</a></li>
                    <li><a className="menu-item" href="#section-why-attend">Why Attend</a></li>
                    <li><a className="menu-item" href="#section-who-attend">Who Should Attend</a></li>
                    <li><a className="menu-item" href="#speaker">Past Speakers</a></li>
                    <li><a className="menu-item" href="#pastpartners">Past Partners</a></li>
                    <li><a className="menu-item" href="#section-venue">Venue</a></li>
                    
                  </ul>
                </div>
              </div>

              <div className="de-flex-col">
                <ExpressInterestButton />
                <div className="menu_side_area">
                  <span id="menu-btn"></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
