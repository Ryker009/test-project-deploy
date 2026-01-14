import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 AgriFather | Empowering Farmers Digitally</p>
        
        <div className="footer-links" style={{color:"yellow", fontWeight : "900", marginTop : "10px"}}>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="divider"> | </span>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}