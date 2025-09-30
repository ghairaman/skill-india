import { useEffect, useRef } from "react";

export default function RegisterModal({ autoShow = true }) {
  const modalRef = useRef(null);
  const modalInstanceRef = useRef(null);

  // Helper: remove any leftover backdrops/body flags
  const cleanupBackdrops = () => {
    // remove all backdrops
    document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
    // body flags/styles Bootstrap adds
    document.body.classList.remove("modal-open");
    document.body.style.removeProperty("padding-right");
    document.body.style.removeProperty("overflow");
  };

  useEffect(() => {
    const bs = window.bootstrap;
    const el = modalRef.current;
    if (!el || !bs?.Modal) return;

    // create or fetch the instance
    modalInstanceRef.current = bs.Modal.getOrCreateInstance(el);

    // auto-show if desired
    if (autoShow) modalInstanceRef.current.show();

    // when the modal is fully hidden, clean up any leftovers
    const onHidden = () => cleanupBackdrops();
    el.addEventListener("hidden.bs.modal", onHidden);

    // also clean up on unmount
    return () => {
      try {
        modalInstanceRef.current?.hide();
        modalInstanceRef.current?.dispose();
      } catch {}
      el.removeEventListener("hidden.bs.modal", onHidden);
      cleanupBackdrops();
    };
  }, [autoShow]);

  return (
    <div
      ref={modalRef}
      className="modal fade regmodel"
      id="myModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <p className="modal-title" id="exampleModalLabel">
              <span className="h5">
                Skill India Leadership Summit
              </span>
              <br />
              <span className="p text-white">
                13<sup>th</sup> February 2026
              </span>
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="container">
              <form
                action="https://forms.zohopublic.in/observenow/form/SkillIndiaLeadershipSummitNewDelhi/formperma/onMkGmAmmTEaMbmlEBonGImllvYeq5xDJ9LQ3HtK6mw/htmlRecords/submit"
                name="form"
                id="form"
                method="POST"
                acceptCharset="UTF-8"
                encType="multipart/form-data"
              >
                <input type="hidden" name="zf_referrer_name" value="" />
                <input type="hidden" name="zf_redirect_url" value="" />
                <input type="hidden" name="zc_gad" value="" />

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      type="text"
                      name="SingleLine"
                      maxLength={255}
                      placeholder="Name"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="SingleLine2"
                      maxLength={255}
                      placeholder="Organization"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="SingleLine1"
                      maxLength={255}
                      placeholder="Designation"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="PhoneNumber_countrycode"
                      id="international_PhoneNumber_countrycode"
                      maxLength={20}
                      placeholder="Contact Number"
                      // custom data attrs preserved; plugin can read them
                      compname="PhoneNumber"
                      phoneformat="1"
                      iscountrycodeenabled="false"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      type="email"
                      className="form-control"
                      name="Email"
                      maxLength={255}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="SingleLine3"
                      maxLength={255}
                      placeholder="Enter Your City"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 pb-2">
                    <select name="Dropdown" id="interest" className="form-control" required>
                      <option value="-Select-" defaultValue>
                        -Select-
                      </option>
                      <option value="- I am Interested in -">- I am Interested in -</option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Speakership">Speakership</option>
                      <option value="Exhibition">Exhibition</option>
                      <option value="Media Partnership">Media Partnership</option>
                      <option value="Delegate">Delegate</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 text-start">
                    <button type="submit" className="btn-one1">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* /Body */}
        </div>
      </div>
    </div>
  );
}
