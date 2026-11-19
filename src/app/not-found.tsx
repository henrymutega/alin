import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  Search,
  CircleHelp,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="alin-not-found">
      <div className="alin-container">
        <div className="alin-404-content">

          {/* Error illustration */}
        <div className="alin-404-text">
            <span className="alin-404-label">
              <span className="alin-404-label-dot" />
              ERROR 404
            </span>

            <h1>
              Oops! Page <span>not found.</span>
            </h1>

            <p>
              The page you are looking for may have been moved,
              deleted or is temporarily unavailable. Don't worry,
              let's help you get back on track.
            </p>
          </div>
          <div className="alin-404-visual">
            <div className="alin-404-circle">
              <span>4</span>
              <div className="alin-404-icon">
                <Search size={65} strokeWidth={1.5} />
              </div>
              <span>4</span>
            </div>

            <div className="alin-404-decoration alin-404-decoration-one" />
            <div className="alin-404-decoration alin-404-decoration-two" />
            <div className="alin-404-decoration alin-404-decoration-three" />
          </div>

          {/* Action buttons */}
          <div className="alin-404-actions">
            <Link href="/" className="alin-404-home-button">
              <Home size={18} />
              Back to Homepage
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="https://wa.me/254711970432?text=Hello%20AlinPay%2C%20I%20need%20help%20finding%20a%20page."
              target="_blank"
              rel="noopener noreferrer"
              className="alin-404-support-button"
            >
              <CircleHelp size={18} />
              Contact Support
            </a>
          </div>

          {/* Footer navigation */}
          <div className="alin-404-bottom">
            <Link href="/" className="alin-404-back-link">
              <ArrowLeft size={15} />
              Return to Alin
            </Link>

            <span className="alin-404-divider" />

            <span className="alin-404-bottom-text">
              Need assistance? We're here to help.
            </span>
          </div>

        </div>
      </div>
    </main>
  );
}
