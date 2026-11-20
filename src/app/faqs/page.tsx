"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  CreditCard,
  HelpCircle,
  MessageCircle,
  Search,
  ShieldCheck,
  Store,
  Wallet,
  X,
} from "lucide-react";

const whatsappNumber = "254711970432";

const whatsappMessage =
  "Hello AlinPay team, I have a question and would like some assistance.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const categories = [
  { name: "All Questions", icon: HelpCircle },
  { name: "Getting Started", icon: Store },
  { name: "Payments & Wallet", icon: Wallet },
  { name: "Business Management", icon: CreditCard },
  { name: "Security & Support", icon: ShieldCheck },
];

const faqs = [
  {
    category: "Getting Started",
    question: "What is AlinPay?",
    answer:
      "AlinPay is a financial and business management platform designed to help individuals and businesses manage payments and organise their day-to-day financial operations. It brings useful business tools together in one place.",
  },
  {
    category: "Getting Started",
    question: "Who can use AlinPay?",
    answer:
      "AlinPay is designed for individuals, entrepreneurs, small and medium-sized businesses, shops, minimarts, restaurants, wholesalers, institutions and other organisations looking for better ways to manage their finances and operations.",
  },
  {
    category: "Getting Started",
    question: "How do I get started with AlinPay?",
    answer:
      "You can get started by contacting our team or using the registration options available on the AlinPay platform. If you need help choosing the right setup for your business, our team can guide you through the process.",
  },
  {
    category: "Getting Started",
    question: "Can I use AlinPay for more than one business?",
    answer:
      "AlinPay is designed to support business owners managing multiple business accounts. Contact our team to learn about setting up and managing your business accounts.",
  },
  {
    category: "Payments & Wallet",
    question: "What can I do with the AlinPay wallet?",
    answer:
      "The AlinPay wallet is designed to help users manage their financial transactions. Available services and features may depend on your account and the services enabled for you.",
  },
  {
    category: "Payments & Wallet",
    question: "Can my customers pay my business using M-Pesa?",
    answer:
      "AlinPay supports a payment experience that connects business payments with M-Pesa. Customers can use the available M-Pesa payment options, while businesses can manage their payment activity through the AlinPay business platform.",
  },
  {
    category: "Payments & Wallet",
    question: "How much does it cost to use AlinPay?",
    answer:
      "AlinPay's published transaction pricing includes KSh 0 for transactions below KSh 100 and KSh 3 for transactions from KSh 101 to KSh 500. Please contact our team or check the latest pricing information for other transaction amounts and services.",
  },
  {
    category: "Payments & Wallet",
    question: "Can I view my business transactions?",
    answer:
      "Yes. AlinPay provides business tools designed to help you monitor and organise your financial activity, including payment and transaction records available through your business dashboard.",
  },
  {
    category: "Business Management",
    question: "What business operations can I manage with AlinPay?",
    answer:
      "Depending on the services enabled for your account, AlinPay offers tools for payments, sales and POS, inventory, invoices, supplier management, payroll, petty cash, debt reminders and business analytics.",
  },
  {
    category: "Business Management",
    question: "Does AlinPay support inventory management?",
    answer:
      "Yes. AlinPay includes inventory management capabilities designed to help businesses organise stock, monitor inventory and keep their business operations better coordinated.",
  },
  {
    category: "Business Management",
    question: "Can I manage sales and POS activities?",
    answer:
      "AlinPay offers POS and sales management tools to support businesses in recording and managing sales activity. Contact our team to understand the setup that suits your business.",
  },
  {
    category: "Business Management",
    question: "Can AlinPay help me manage debts and invoices?",
    answer:
      "AlinPay includes invoice and debt management features designed to help businesses organise amounts owed, track obligations and send reminders.",
  },
  {
    category: "Security & Support",
    question: "Is my business information private?",
    answer:
      "AlinPay is designed to support the management of business and financial information responsibly. For details about data handling, account protection and privacy practices, please refer to the applicable AlinPay policies or contact our team.",
  },
  {
    category: "Security & Support",
    question: "What should I do if I have a problem with a transaction?",
    answer:
      "Contact the AlinPay support team with a description of the issue and any relevant transaction reference. Do not share your password, PIN or other confidential account credentials.",
  },
  {
    category: "Security & Support",
    question: "How can I contact the AlinPay team?",
    answer:
      "You can reach our team through the WhatsApp support button on this page or through the contact details on our Contact page. We will be happy to assist with your questions.",
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        faq.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setOpenQuestion(null);
  };

  return (
    <main className="alin-faq-page">
      <section className="alin-faq-hero">
        <div className="alin-container">
          <div className="alin-faq-hero-grid">
            <div className="alin-faq-hero-content">
              <span className="alin-faq-eyebrow">
                <HelpCircle size={16} />
                HELP CENTRE
              </span>

              <h1>
                Frequently Asked
                <span> Questions</span>
              </h1>

              <p>
                Everything you need to know about AlinPay, payments and
                managing your business. Find answers and get the most out
                of your AlinPay experience.
              </p>
            </div>

            <div className="alin-faq-hero-visual">
              <div className="alin-faq-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
                  alt="Digital business analytics displayed on a laptop"
                />

                <div className="alin-faq-image-overlay" />

                <div className="alin-faq-floating-card">
                  <div className="alin-faq-floating-icon">
                    <MessageCircle size={21} />
                  </div>
                  <div>
                    <strong>We're here to help</strong>
                    <span>
                        <a href={whatsappLink} target="_blank" rel="noreferrer" className="alin-faq-whatsapp-link">
                            we are all ears.. <ArrowUpRight size={15} />
                        </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="alin-faq-decoration alin-faq-decoration-one" />
              <div className="alin-faq-decoration alin-faq-decoration-two" />
            </div>
          </div>
        </div>
      </section>

      <section className="alin-faq-content-section">
        <div className="alin-container">
          {/* <div className="alin-faq-section-heading">
            <span className="alin-faq-section-label">HAVE A QUESTION?</span>
            <h2>How can we help you?</h2>
            <p>
              Browse our frequently asked questions or search for something
              specific.
            </p>
          </div> */}

          <div className="alin-faq-layout">
            <aside className="alin-faq-categories">
              <h3>Browse by topic</h3>

              <div className="alin-faq-category-list">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.name;

                  return (
                    <button
                      type="button"
                      key={category.name}
                      className={`alin-faq-category ${
                        isActive ? "active" : ""
                      }`}
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      <Icon size={18} />
                      <span>{category.name}</span>
                      <ArrowRight size={15} className="category-arrow" />
                    </button>
                  );
                })}
              </div>

              <div className="alin-faq-sidebar-help">
                <div className="alin-faq-sidebar-help-icon">
                  <MessageCircle size={22} />
                </div>
                <h4>Need more help?</h4>
                <p>
                  Talk to our team and get assistance with your questions.
                </p>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Chat with us <ArrowUpRight size={16} />
                </a>
              </div>
            </aside>

            <div className="alin-faq-questions">
              <div className="alin-faq-results-heading">
                <div>
                  {/* <span>FREQUENTLY ASKED QUESTIONS</span> */}
                  <h3>
                    {activeCategory === "All Questions"
                      ? "All questions"
                      : activeCategory}
                  </h3>
                </div>

                <span className="alin-faq-count">
                  {filteredFaqs.length}{" "}
                  {filteredFaqs.length === 1 ? "question" : "questions"}
                </span>
              </div>

              {filteredFaqs.length > 0 ? (
                <div className="alin-faq-accordion">
                  {filteredFaqs.map((faq, index) => {
                    const isOpen = openQuestion === index;

                    return (
                      <div
                        className={`alin-faq-item ${
                          isOpen ? "is-open" : ""
                        }`}
                        key={faq.question}
                      >
                        <button
                          type="button"
                          className="alin-faq-question"
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenQuestion(isOpen ? null : index)
                          }
                        >
                          <span className="alin-faq-question-text">
                            {faq.question}
                          </span>

                          <span className="alin-faq-chevron">
                            <ChevronDown size={19} />
                          </span>
                        </button>

                        {isOpen && (
                          <div className="alin-faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="alin-faq-empty">
                  <div>
                    <Search size={25} />
                  </div>
                  <h3>No questions found</h3>
                  <p>
                    We couldn't find an answer matching your search. Try
                    another keyword or contact our team.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All Questions");
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="alin-faq-support-section">
        <div className="alin-container">
          <div className="alin-faq-support-card">
            <div className="alin-faq-support-content">
              <span className="alin-faq-support-label">
                STILL HAVE QUESTIONS?
              </span>

              <h2>
                Didn't find the answer
                <span> you were looking for?</span>
              </h2>

              <p>
                No worries. Our team is ready to help. Send us a message on
                WhatsApp and let us know what you need assistance with.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="alin-faq-whatsapp-btn"
              >
                <MessageCircle size={19} />
                Ask our team on WhatsApp
                <ArrowUpRight size={17} />
              </a>

              <span className="alin-faq-support-caption">
                We're happy to hear from you.
              </span>
            </div>

            <div className="alin-faq-support-visual">
              <div className="alin-faq-support-circle">
                <MessageCircle size={65} strokeWidth={1.4} />
                <span className="alin-faq-support-spark spark-one">✦</span>
                <span className="alin-faq-support-spark spark-two">✦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="alin-faq-bottom-link">
        <p>
          Prefer another way to reach us?{" "}
          <Link href="/contact">
            Visit our Contact page <ArrowUpRight size={15} />
          </Link>
        </p>
      </div>
    </main>
  );
}
