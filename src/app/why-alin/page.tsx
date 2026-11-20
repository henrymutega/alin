
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Wallet,
  Building2,
  Network,
  ShieldCheck,
  Clock3,
  TrendingUp,
  Smartphone,
  CreditCard,
  BarChart3,
  Handshake,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Alin | Financial Trust, Freedom for All",
  description:
    "Discover how Alin makes everyday payments simpler, helps businesses operate smarter, and creates opportunities across the fintech ecosystem.",
};

const whatsappLink =
  "https://wa.me/254711970432?text=Hello%20AlinPay%2C%20I%20would%20like%20to%20know%20more%20about%20Alin.";

export default function WhyAlinPage() {
  return (
    <main className="alin-why-page">
      <section className="alin-why-hero">
        <div className="alin-container">
          <div className="alin-why-hero-content">
            <span className="alin-why-eyebrow">
              WHY ALIN
            </span>

            <h1>
              Money moves.
              <br />
              <span>Life moves forward.</span>
            </h1>

            <p>
              Whether you're managing personal finances, running a business,
              or building financial technology, Alin helps make money work
              better for you.
            </p>

            <div className="alin-why-hero-actions">
              <a href="#alin-for-everyone" className="alin-why-primary-btn">
                Discover the Alin difference
                <ArrowRight size={17} />
              </a>

              <Link href="/contact" className="alin-why-secondary-btn">
                Talk to our team
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="alin-why-hero-image">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85"
              alt="Person making a digital payment"
            />

            <div className="alin-why-hero-note">
              <span className="alin-why-note-icon">
                <Zap size={19} />
              </span>
              <div>
                <strong>Finance, made simpler.</strong>
                <span>One platform. More possibilities.</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* AUDIENCE INTRODUCTION */}
      <section className="alin-why-intro" id="alin-for-everyone">
        <div className="alin-container">
          <span className="alin-why-eyebrow">ONE ALIN. MANY POSSIBILITIES.</span>
          <h2>
            Different needs.
            <br />
            <span>One smarter way forward.</span>
          </h2>
          <p>
            Alin brings financial convenience, business efficiency and
            technology-driven possibilities closer to everyone.
          </p>
        </div>
      </section>


      {/* 01 - INDIVIDUALS */}
      <section className="alin-why-audience alin-why-individuals">
        <div className="alin-container alin-why-audience-grid">

          <div className="alin-why-audience-image">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=85"
              alt="Customer using a digital payment service"
            />

            <div className="alin-why-image-label">
              <Wallet size={19} />
              <span>Your money, in your hands.</span>
            </div>
          </div>

          <div className="alin-why-audience-content">
            <span className="alin-why-number">01 / FOR INDIVIDUALS</span>

            <h2>
              Your money.
              <br />
              <span>Your freedom.</span>
            </h2>

            <p className="alin-why-punchline">
              Spend smarter. Send easier. Stay in control.
            </p>

            <p className="alin-why-description">
              Everyday money shouldn't be complicated. Alin gives you a
              simpler way to make payments and manage your financial
              activities, wherever life takes you.
            </p>

            <ul className="alin-why-benefits">
              <li>
                <CheckCircle2 />
                Convenient digital payments
              </li>
              <li>
                <CheckCircle2 />
                Easy money transfers
              </li>
              <li>
                <CheckCircle2 />
                A clearer view of your transactions
              </li>
              <li>
                <CheckCircle2 />
                Financial convenience in one place
              </li>
            </ul>

            <Link href="/contact" className="alin-why-text-link">
              Discover Alin for individuals
              <ArrowUpRight size={17} />
            </Link>
          </div>

        </div>
      </section>


      {/* 02 - BUSINESSES AND ORGANIZATIONS */}
      <section className="alin-why-audience alin-why-business">
        <div className="alin-container alin-why-audience-grid alin-why-reverse">

          <div className="alin-why-audience-content">
            <span className="alin-why-number">02 / FOR BUSINESSES & ORGANIZATIONS</span>

            <h2>
              Less admin.
              <br />
              <span>More business.</span>
            </h2>

            <p className="alin-why-punchline">
              Run your operations. Not the paperwork.
            </p>

            <p className="alin-why-description">
              From payments to inventory, invoices to payroll, Alin brings
              essential business operations together so you can spend less
              time chasing processes and more time growing.
            </p>

            <ul className="alin-why-benefits">
              <li>
                <CheckCircle2 />
                Receive and manage digital payments
              </li>
              <li>
                <CheckCircle2 />
                Track sales, expenses and cash flow
              </li>
              <li>
                <CheckCircle2 />
                Manage inventory, suppliers and invoices
              </li>
              <li>
                <CheckCircle2 />
                Organise teams and business operations
              </li>
            </ul>

            <Link href="/contact" className="alin-why-text-link">
              Discover Alin for business
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="alin-why-audience-image">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
              alt="Business team working together"
            />

            <div className="alin-why-image-label">
              <Building2 size={19} />
              <span>Built for the way business works.</span>
            </div>
          </div>

        </div>
      </section>


      {/* 03 - FINTECH */}
      <section className="alin-why-audience alin-why-fintech">
        <div className="alin-container alin-why-audience-grid">

          <div className="alin-why-audience-image">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
              alt="Digital financial technology and data analytics"
            />

            <div className="alin-why-image-label">
              <Network size={19} />
              <span>Technology that moves finance forward.</span>
            </div>
          </div>

          <div className="alin-why-audience-content">
            <span className="alin-why-number">03 / FOR FINTECHS & PARTNERS</span>

            <h2>
              Build beyond
              <br />
              <span>the transaction.</span>
            </h2>

            <p className="alin-why-punchline">
              Better connections. Bigger possibilities.
            </p>

            <p className="alin-why-description">
              The future of finance is connected. Alin is built around
              practical financial experiences, creating opportunities for
              collaboration across businesses, technology providers and
              the wider financial ecosystem.
            </p>

            <ul className="alin-why-benefits">
              <li>
                <CheckCircle2 />
                Explore strategic partnerships
              </li>
              <li>
                <CheckCircle2 />
                Connect with business ecosystems
              </li>
              <li>
                <CheckCircle2 />
                Collaborate on digital financial solutions
              </li>
              <li>
                <CheckCircle2 />
                Help shape more accessible financial experiences
              </li>
            </ul>

            <Link href="/contact" className="alin-why-text-link">
              Explore partnership opportunities
              <ArrowUpRight size={17} />
            </Link>
          </div>

        </div>
      </section>


      {/* CLOSING CTA */}
      <section className="alin-why-cta">
        <div className="alin-container">
          <div className="alin-why-cta-content">
            <span className="alin-why-eyebrow">YOUR NEXT MOVE STARTS HERE</span>

            <h2>
              Finance should move you forward.
              <br />
              <span>That's why there's Alin.</span>
            </h2>

            <p>
              Make the move towards simpler payments, smarter operations
              and better financial possibilities.
            </p>

            <div className="alin-why-cta-actions">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="alin-why-secondary-btn-bm"
              >
                Talk to Alin
                <ArrowUpRight size={17} />
              </a>

              <Link href="/contact" className="alin-why-cta-link">
                Contact our team
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
