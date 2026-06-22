import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Anjula Madusanka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
