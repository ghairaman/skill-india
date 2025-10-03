// src/components/ExpressInterestButton.jsx
export default function ExpressInterestButton({ children = "Express Your Interest" }) {
  const openModal = (e) => {
    e.preventDefault();
    const el = document.getElementById("myModal");
    window.bootstrap?.Modal.getOrCreateInstance(el)?.show();
  };
  return (
    <a
      href="#"
      className="btn-main fx-slide w-100 txt"
      data-bs-toggle="modal"
      data-bs-target="#myModal"
      onClick={(e) => e.preventDefault()}
    >
      <span>Express Your Interest</span>
    </a>
    
  );
}
