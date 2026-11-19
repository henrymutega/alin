"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Wallet,
  Building2,
  ShoppingCart,
  CreditCard,
  BarChart3,
  Store,
  Utensils,
  ShoppingBasket,
  BookOpen,
  CircleHelp,
  Workflow,
  BriefcaseBusiness,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/254703361658?text=Hello%20AlinPay%2C%20I%20would%20like%20to%20book%20a%20free%20demo.";

const navigation = [
  {
    label: "Products",
    items: [
      {
        label: "AlinPay Wallet",
        description: "A smarter way to manage your money.",
        href: "/wallet",
        icon: Wallet,
      },
      {
        label: "AlinPay Business",
        description: "Manage your business finances in one place.",
        href: "/business",
        icon: Building2,
      },
      {
        label: "POS & Inventory",
        description: "Track sales, stock and daily operations.",
        href: "/pos-inventory",
        icon: ShoppingCart,
      },
    ],
  },
  {
    label: "Solutions",
    items: [
      {
        label: "Digital Payments",
        description: "Receive and manage payments seamlessly.",
        href: "/digital-payments",
        icon: CreditCard,
      },
      {
        label: "Business Management",
        description: "Bring your business activities together.",
        href: "/business-management",
        icon: Workflow,
      },
      {
        label: "Financial Operations",
        description: "Manage invoices, payroll and expenses.",
        href: "/financial-operations",
        icon: BarChart3,
      },
    ],
  },
  {
    label: "Industries",
    items: [
      {
        label: "Minimarts",
        description: "Simplify daily retail operations.",
        href: "/industries/minimarts",
        icon: Store,
      },
      {
        label: "Restaurants",
        description: "Manage payments and restaurant finances.",
        href: "/industries/restaurants",
        icon: Utensils,
      },
      {
        label: "Supermarkets",
        description: "Connect sales, inventory and payments.",
        href: "/industries/supermarkets",
        icon: ShoppingBasket,
      },
    ],
  },
];

const resources = [
  {
    label: "Blogs",
    description: "Insights for smarter business.",
    href: "/blogs",
    icon: BookOpen,
  },
  {
    label: "How It Works",
    description: "Discover how AlinPay works.",
    href: "/#how-it-works",
    icon: Workflow,
  },
  {
    label: "FAQs",
    description: "Find answers to common questions.",
    href: "/faqs",
    icon: CircleHelp,
  },
  {
    label: "About Alin",
    description: "Get to know our mission.",
    href: "/about",
    icon: BriefcaseBusiness,
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileExpanded((current) =>
      current === label ? null : label
    );
  };

  return (
    <header
      className="alin-navbar"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="alin-navbar-inner container">

        {/* Logo */}
        <Link href="/" className="alin-logo" onClick={closeMenus}>
          <img src="/assets/img/alin-logo.png" alt="AlinPay" />
        </Link>

        {/* Mobile Demo Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="alin-mobile-header-cta"
        >
          <MessageCircle size={16} />
          <span>Book Free Demo</span>
        </a>

        {/* Mobile Menu Toggle - Keep only one */}
        <button
          type="button"
          className="alin-mobile-toggle"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={
            mobileMenuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="alin-desktop-nav" aria-label="Main navigation">
          {navigation.map((group) => (
            <div
              className={`alin-nav-group ${
                activeDropdown === group.label ? "is-open" : ""
              }`}
              key={group.label}
              onMouseEnter={() => setActiveDropdown(group.label)}
            >
              <button
                type="button"
                className="alin-nav-trigger"
                aria-expanded={activeDropdown === group.label}
                onClick={() =>
                  setActiveDropdown((current) =>
                    current === group.label ? null : group.label
                  )
                }
              >
                {group.label}
                <ChevronDown size={15} className="alin-chevron" />
              </button>

              <div className="alin-dropdown">
                <div className="alin-dropdown-content">
                  <div className="alin-dropdown-heading">
                    <span>EXPLORE ALINPAY</span>
                    <p>Tools designed to move your business forward.</p>
                  </div>

                  <div className="alin-dropdown-grid">
                    {group.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="alin-dropdown-item"
                          onClick={closeMenus}
                        >
                          <span className="alin-dropdown-icon">
                            <Icon size={21} />
                          </span>

                          <span className="alin-dropdown-text">
                            <strong>{item.label}</strong>
                            <small>{item.description}</small>
                          </span>

                          <ArrowUpRight
                            size={16}
                            className="alin-dropdown-arrow"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Why Alin */}
          <Link
            href="/#why-alin"
            className="alin-nav-link"
            onClick={closeMenus}
          >
            Why Alin
          </Link>

          {/* Resources */}
          <div
            className={`alin-nav-group ${
              activeDropdown === "Resources" ? "is-open" : ""
            }`}
            onMouseEnter={() => setActiveDropdown("Resources")}
          >
            <button
              type="button"
              className="alin-nav-trigger"
              aria-expanded={activeDropdown === "Resources"}
              onClick={() =>
                setActiveDropdown((current) =>
                  current === "Resources" ? null : "Resources"
                )
              }
            >
              Resources
              <ChevronDown size={15} className="alin-chevron" />
            </button>

            <div className="alin-dropdown alin-dropdown-resources">
              <div className="alin-dropdown-content">
                <div className="alin-dropdown-heading">
                  <span>RESOURCES</span>
                  <p>Everything you need to get more from AlinPay.</p>
                </div>

                <div className="alin-dropdown-grid">
                  {resources.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="alin-dropdown-item"
                        onClick={closeMenus}
                      >
                        <span className="alin-dropdown-icon">
                          <Icon size={21} />
                        </span>

                        <span className="alin-dropdown-text">
                          <strong>{item.label}</strong>
                          <small>{item.description}</small>
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="alin-dropdown-arrow"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop Contact and Demo CTA */}
        <div className="alin-nav-actions">
          <Link
            href="/contact"
            className="alin-nav-contact"
            onClick={closeMenus}
          >
            Contact
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="alin-nav-cta"
          >
            <MessageCircle size={18} />
            Book Free Demo
          </a>
        </div>

      </div>

      {/* Mobile Navigation */}
      <div className={`alin-mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}>
        <nav className="alin-mobile-nav" aria-label="Mobile navigation">

          {navigation.map((group) => (
            <div className="alin-mobile-group" key={group.label}>
              <button
                type="button"
                className="alin-mobile-trigger"
                onClick={() => toggleMobileDropdown(group.label)}
                aria-expanded={mobileExpanded === group.label}
              >
                {group.label}
                <ChevronDown
                  size={18}
                  className={
                    mobileExpanded === group.label
                      ? "rotate-chevron"
                      : ""
                  }
                />
              </button>

              <div
                className={`alin-mobile-submenu ${
                  mobileExpanded === group.label ? "is-expanded" : ""
                }`}
              >
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenus}
                      className="alin-mobile-subitem"
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Why Alin */}
          <Link
            href="/#why-alin"
            className="alin-mobile-link"
            onClick={closeMenus}
          >
            Why Alin
          </Link>

          {/* Mobile Resources */}
          <div className="alin-mobile-group">
            <button
              type="button"
              className="alin-mobile-trigger"
              onClick={() => toggleMobileDropdown("Resources")}
              aria-expanded={mobileExpanded === "Resources"}
            >
              Resources
              <ChevronDown
                size={18}
                className={
                  mobileExpanded === "Resources"
                    ? "rotate-chevron"
                    : ""
                }
              />
            </button>

            <div
              className={`alin-mobile-submenu ${
                mobileExpanded === "Resources" ? "is-expanded" : ""
              }`}
            >
              {resources.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    className="alin-mobile-subitem"
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Contact */}
          <Link
            href="/contact"
            className="alin-mobile-link"
            onClick={closeMenus}
          >
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
}
