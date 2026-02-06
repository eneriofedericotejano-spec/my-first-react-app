import Header from "../Header/Header";
import ContactModal from "../ContactModal/ContactModal";
import TeamMember from "../TeamMembers/TeamMember";
import Footer from "../footer/Footer";
import "./Main.css";
import home from "../../assets/homebg.png";
import vet from "../../assets/furever.jpg";
import balay from "../../assets/balayginhawa.png";
import medical from "../../assets/medical.png";
import qcu from "../../assets/qcu.jpg";

import { useEffect, useState } from "react";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open contact modal
  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  // Close contact modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, observerOptions);

    const slideElements = document.querySelectorAll(
      ".slide-in-left, .slide-in-right",
    );
    slideElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="main-container">
        <Header />
        <div className="content">
          <h1>
            Your Ideas, Our Code, <br /> Turned into Reality!
          </h1>
          <button
            className="contactbutton"
            type="button"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </div>
      </section>

      <section className="aboutus-container">
        <div className="aboutus">
          <h2>
            What is <span className="highlight">InnoVision</span> all about?
          </h2>
        </div>

        <div className="aboutpara">
          <p>
            InnoVision is a name formed by combining innovation and vision, the
            core principles that drive everything we do. It reflects our
            commitment to creating forward-thinking solutions guided by a clear
            vision for the future. At InnoVision, we transform ideas into
            purposeful innovations designed not just for today, but for what
            lies ahead.
          </p>
          <br />
          <p>
            We turn bold concepts into real, impactful solutions that help
            businesses grow and thrive.We are your partner in transforming ideas
            into reality, using technology to create solutions that truly
            matter. Our focus is on solving challenges, improving efficiency,
            and unlocking growth opportunities. By combining strategy,
            innovation, and execution, we ensure your business stays competitive
            and adaptive. With InnoVision, companies are empowered to succeed
            today and stay future-ready.
          </p>
        </div>
      </section>

      <section className="services-container">
        <div className="servicescard slide-in-left">
          <h2 className="do">
            What does <span className="highlight">Innovision</span> do?
          </h2>
          <p>
            Innovision offers end-to-end solutions in Business Process
            Automation, Custom Software Development, E-learning & Training
            Platforms, Web Tools for Business Efficiency, and Digital
            Transformation Planning. From strategy to implementation, we craft
            solutions tailored to your business needs, helping you streamline
            operations, improve efficiency, and drive growth. Our expertise
            ensures that every project is scalable, secure, and designed to
            deliver measurable impact.
          </p>
        </div>

        <div className="choosecard slide-in-right">
          <h2 className="fa-choose">
            Why choose <span className="highlight">Innovision</span>?
          </h2>
          <p>
            Choosing InnoVision means working with a team that values quality,
            creativity, and reliability. We don’t just build apps—we build
            solutions that grow with you. With a focus on modern technologies
            and a commitment to excellence, Nexus is the partner you can trust
            to bring your digital vision to reality.
          </p>
        </div>
      </section>

      <section className="projectscontainer">
        <h1 className="projecttitle">Our Projects</h1>

        <div className="project-wrapper firstproject">
          <div className="projectcard slide-in-left">
            <img
              src={vet}
              alt="FurEver Veterinary Clinic"
              className="project-image"
            />
          </div>
          <div className="titleanddescription slide-in-right">
            <h2 className="systemname">FurEver Veterinary Management System</h2>
            <p className="description">
              A web-based Financial Management System designed to help
              businesses efficiently manage and monitor their financial
              operations. The system integrates payroll processing, expense
              tracking, invoicing, and advanced financial reporting into a
              single, centralized platform. By providing real-time financial
              insights, automated calculations, and intuitive dashboards, the
              system enables businesses to maintain financial control, improve
              accuracy, ensure transparency, and make strategic decisions that
              drive growth and stability.
            </p>
          </div>
        </div>

        <div className="project-wrapper secondproject">
          <div className="projectcard slide-in-right">
            <img
              src={balay}
              alt="Balay Ginhawa Hotel"
              className="project-image"
            />
          </div>
          <div className="titleanddescription slide-in-left">
            <h2 className="systemname">
              Balay Ginhawa Filipino Heritage Hotel
            </h2>
            <p className="description">
              Balay Ginhawa Hotels Property Management System is a web-based
              platform that leverages modern cloud computing and RFID
              technologies to streamline hotel management operations. It
              enhances operational efficiency by automating key functions such
              as guest registration, room assignment, RFID-based room access,
              billing, and reservations, while enabling centralized and secure
              data handling. Through real-time data access and system
              integration, the platform minimizes manual errors, improves staff
              productivity, and delivers a smoother, more reliable experience
              for both hotel personnel and guests.
            </p>
          </div>
        </div>

        <div className="project-wrapper firstproject">
          <div className="projectcard slide-in-left">
            <img
              src={medical}
              alt="St. Rupert Medical Clinic"
              className="project-image"
            />
          </div>
          <div className="titleanddescription slide-in-right">
            <h2 className="systemname">St. Rupert Medical Clinic</h2>
            <p className="description">
              A web-based Medical Clinic Management and Information System
              designed to provide patients with easy access to clinic services
              and essential healthcare information. The system features online
              appointment requests, service listings, clinic schedules, and
              institutional details such as mission, vision, and goals, all
              presented through a clean and user-friendly interface. By
              centralizing patient interaction, improving accessibility, and
              streamlining appointment coordination, the system enhances patient
              experience, supports efficient clinic operations, and promotes
              organized, reliable healthcare service delivery.
            </p>
          </div>
        </div>

        <div className="project-wrapper secondproject">
          <div className="projectcard slide-in-right">
            <img
              src={qcu}
              alt="Quezon City University Portal"
              className="project-image"
            />
          </div>
          <div className="titleanddescription slide-in-left">
            <h2 className="systemname">
              Quezon City University Management Portal
            </h2>
            <p className="description">
              A web-based University Management Portal designed to streamline
              and centralize academic and administrative processes at Quezon
              City University. The system integrates student information
              management, enrollment processing, grade viewing, announcements,
              and user account management into a single, unified platform. By
              providing real-time access to academic records, automated
              workflows, and an intuitive dashboard, the portal enhances
              operational efficiency, improves data accuracy, ensures
              transparency, and supports better decision-making for students,
              faculty, and administrators.
            </p>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <TeamMember />
      <Footer />
    </>
  );
}

export default Main;
