// src/components/RegisterModal.jsx
import { useEffect, useRef } from "react";

/**
 * Bootstrap 5 modal that can auto-open safely (no race with backdrop),
 * and cleans up any leftover backdrops/body flags on hide/unmount.
 *
 * Requirements in index.html (load once):
 * <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
 * <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
 */
export default function RegisterModal({ autoShow = true, modalId = "myModal" }) {
  const modalRef = useRef(null);
  const instanceRef = useRef(null);
  const shownOnceRef = useRef(false);

  const cleanupBackdrops = () => {
    document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
    document.body.classList.remove("modal-open");
    document.body.style.removeProperty("padding-right");
    document.body.style.removeProperty("overflow");
  };

  useEffect(() => {
    const el = modalRef.current;
    const bs = window.bootstrap;
    if (!el || !bs?.Modal) return;

    // Create / get instance
    const inst = bs.Modal.getOrCreateInstance(el, {
      backdrop: true,
      keyboard: true,
      focus: true,
    });
    instanceRef.current = inst;

    // Safe show helper
    const safeShow = () => {
      // Ensure still mounted & not already visible
      if (!document.body.contains(el) || el.classList.contains("show")) return;
      try {
        inst.show();
      } catch (err) {
        // Avoid crashing app if Bootstrap hits a timing edge
        console.error("Bootstrap Modal show() failed:", err);
      }
    };

    // Auto-show exactly once (guards React StrictMode double-effect in dev)
    if (autoShow && !shownOnceRef.current) {
      shownOnceRef.current = true;
      // Schedule microtask -> rAF so Bootstrap can prep backdrop/DOM
      queueMicrotask(() => {
        if (!document.body.contains(el)) return;
        requestAnimationFrame(safeShow);
      });
    }

    // Clean up when fully hidden
    const onHidden = () => cleanupBackdrops();
    el.addEventListener("hidden.bs.modal", onHidden);

    // Teardown
    return () => {
      try {
        inst.hide();
        inst.dispose();
      } catch {}
      el.removeEventListener("hidden.bs.modal", onHidden);
      cleanupBackdrops();
      shownOnceRef.current = false; // allow re-show on future mounts
    };
  }, [autoShow]);

  return (
    <div
      ref={modalRef}
      className="modal fade regmodel"
      id={modalId}
      tabIndex={-1}
      aria-labelledby={`${modalId}-label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <p className="modal-title" id={`${modalId}-label`}>
              <span className="h5">Skill India Leadership Summit</span>
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
                      <option value="-Select-">-Select-</option>
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
