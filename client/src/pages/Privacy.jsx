import "../styles/privacy.css";
import { useState, useEffect, useRef } from "react";

// Reusable ScrollReveal Wrapper for UI Lazy Loading
function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default function Privacy() {
  return (
    <div className="privacy-page">
      {/* HEADER */}
      <section className="privacy-hero">
        <h1>Privacy Policy</h1>
      </section>

      {/* CONTENT */}
      <section className="privacy-content">
        <ScrollReveal>
          <div className="privacy-column">
            <h2>Overview</h2>
            <p>
              At AgriFather, we value your privacy and are committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use, and safeguard your data when you use our platform.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect personal details such as your name, email address,
              and contact information when you interact with our website, submit
              forms, or register an account.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              The information collected is used to improve our services, respond
              to user inquiries, send updates, and ensure a better user
              experience.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="privacy-column">
            <h2>Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal
              data against unauthorized access, alteration, or disclosure.
            </p>

            <h2>Cookies</h2>
            <p>
              AgriFather uses cookies to enhance user experience, analyze website
              traffic, and personalize content. You can choose to disable cookies
              through your browser settings.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services such as analytics tools and
              advertising platforms. These services may collect information in
              accordance with their own privacy policies.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}