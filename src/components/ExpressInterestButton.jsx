// src/components/ExpressInterestButton.jsx
export default function ExpressInterestButton({ children = "Express Your Interest" }) {
  const open = (e) => {
    e.preventDefault();
    const el = document.getElementById("myModal");
    window.bootstrap?.Modal.getOrCreateInstance(el)?.show();
  };
  return (
    <a href="#" className="btn-main mx-2 fx-slide txt" data-hover={children} onClick={open}>
      <span>{children}</span>
    </a>
  );
}
