
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const footerLinks = {
  platform: [
    { label: "Platform overview", href: "/platform" },
    { label: "Online Business Website", href: "/online-website" },
    { label: "AI Business Advisor", href: "/ai-advisor" },
    { label: "How It Works", href: "/how-it-works" },
  ],

  solutions: [
    { label: "Inventory", href: "/solutions/inventory" },
    { label: "Sales & POS", href: "/solutions/sales-pos" },
    { label: "Payments", href: "/solutions/payments" },
    { label: "Debt Management", href: "/solutions/debt" },
    { label: "Analytics", href: "/solutions/analytics" },
  ],

  industries: [
    { label: "Minimarts", href: "/industries/minimarts" },
    { label: "Supermarkets", href: "/industries/supermarkets" },
    { label: "Schools & Institutions", href: "/industries/schools" },
    { label: "All industries", href: "/industries" },
  ],

  company: [
    { label: "About Alin", href: "/about" },
    { label: "Why Alin", href: "/why-alin" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "#",
    icon: FaTiktok,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
];

const demoLink =
  "https://wa.me/254703361658?text=Hello%20AlinPay%2C%20I%20would%20like%20to%20book%20a%20free%20demo.";

export default function Footer() {
  return (
    <footer className="alin-footer">
      <div className="alin-container">

        <div className="row gy-5">

          <div className="col-lg-4 col-md-12">
            <div className="alin-footer-brand">

              <Link href="/" className="alin-footer-logo">
                <Image
                  src="/assets/img/alin-mark.png"
                  alt="Alin"
                  width={150}
                  height={150}
                  className="alin-footer-logo-image"
                />
              </Link>
              <div className="alin-footer-demo-wrapper">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alin-footer-demo"
                >
                  Book Free Demo
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              </div>

              {/* Email */}
              <a
                href="mailto:hello@alinshop.africa"
                className="alin-footer-email"
              >
                <Mail size={20} aria-hidden="true" />
                <span>hello@alinshop.africa</span>
              </a>

              {/* Social Media */}
              <div className="alin-footer-socials">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Alin on ${social.label}`}
                      title={social.label}
                      className="alin-footer-social-link"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Platform */}
          <div className="col-lg-2 col-md-4 col-6">
            <h4 className="alin-footer-heading">Platform</h4>

            <ul className="alin-footer-list">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-lg-2 col-md-4 col-6">
            <h4 className="alin-footer-heading">Solutions</h4>

            <ul className="alin-footer-list">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="col-lg-2 col-md-4 col-6">
            <h4 className="alin-footer-heading">Industries</h4>

            <ul className="alin-footer-list">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-4 col-6">
            <h4 className="alin-footer-heading">Company</h4>

            <ul className="alin-footer-list">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="alin-footer-bottom">
          <p>© {new Date().getFullYear()} Alin. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
