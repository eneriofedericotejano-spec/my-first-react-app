import "./ContactModal.css";

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null; // don't render if modal is closed

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Contact Us</h2>
        <p className="subtitle">You may reach us through</p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📞</span>
            <p>0997 290 5914</p>
          </div>

          <div className="contact-item">
            <span className="icon">✉️</span>
            <p>nuvion.devteam@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
