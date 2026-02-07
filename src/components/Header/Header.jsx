import "./Header.css";
import logo from "../../assets/logo2.png";
import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll to sections
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    // Map navigation items to actual sections
    const sectionMap = {
      services: ".services-container",
      projects: ".projectscontainer",
      about: ".aboutus-container",
      team: ".team-container",
    };

    const targetSection = document.querySelector(sectionMap[sectionId]);
    if (targetSection) {
      const headerHeight = 100; 
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <img src={logo} alt="Nexus Logo" />
        <h1>InnoVision</h1>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`navigation ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => scrollToSection(e, "services")}>
              Our Services
            </a>
          </li>
           <li>
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
              Our Projects
            </a>
          </li>
           <li>
            <a href="#team" onClick={(e) => scrollToSection(e, "team")}>
              Meet the Team
            </a>
          </li>
        </ul>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;