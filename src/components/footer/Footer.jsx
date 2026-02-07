import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4 className="footer-brand">InnoVision</h4>

        <p className="footer-tagline">
          Building smart digital solutions for modern organizations.
        </p>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <p className="footer-copy">
          © 2026 Innovision. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
