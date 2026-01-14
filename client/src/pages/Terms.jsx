import { useState, useEffect, useRef } from "react";
import "../styles/privacy.css"; // Reusing the same styling for consistency

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
    <div ref={domRef} className={`reveal-section ${isVisible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}

export default function Terms() {
  return (
    <div className="privacy-page">
      {/* HEADER */}
      <section className="privacy-hero">
        <h1>Terms & Conditions</h1>
      </section>

      {/* CONTENT */}
      <section className="privacy-content">
        <ScrollReveal>
          <div className="privacy-column">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using AgriFather, you accept and agree to be bound by the terms 
              and provision of this agreement. Our platform is designed to provide 
              agricultural insights and tools "as is" for educational purposes.
            </p>

            <h2>User Conduct</h2>
            <p>
              Users are expected to interact with the platform respectfully. You agree not to 
              use the site for any unlawful purpose, or to post content that is 
              defamatory, obscene, or infringing on intellectual property rights.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content, including blogs, videos, and AI tools, are the property of AgriFather. 
              Unauthorized reproduction or distribution of this material without 
              written consent is strictly prohibited.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="privacy-column">
            <h2>Limitation of Liability</h2>
            <p>
              AgriFather is not responsible for any farming losses or damages resulting from 
              the use of our information. Always consult with a local agricultural expert 
              before implementing new techniques on your farm.
            </p>

            <h2>Account Responsibility</h2>
            <p>
              If you create an account, you are responsible for maintaining the confidentiality 
              of your password and for all activities that occur under your account. 
              Notify us immediately of any unauthorized use.
            </p>

            <h2>Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our platform immediately, 
              without prior notice, for conduct that we believe violates these 
              Terms or is harmful to other users.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}