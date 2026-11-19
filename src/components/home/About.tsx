import Link from "next/link";
import {
  Wallet,
  Building2,
  BarChart3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: Wallet,
    title: "Digital Payments",
    description: "Simplify everyday payments and financial transactions.",
  },
  {
    icon: Building2,
    title: "Business Management",
    description: "Manage essential business activities from one platform.",
  },
  {
    icon: BarChart3,
    title: "Financial Insights",
    description: "Access organised information about your business activities.",
  },
  {
    icon: ShieldCheck,
    title: "Greater Control",
    description: "Keep your financial operations organised and accessible.",
  },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <div className="content">
              <h3>ABOUT ALINPAY</h3>

              <h2>
                Bringing your financial activities together.
              </h2>

              <p>
                AlinPay is a digital financial platform designed to simplify
                how individuals and businesses manage money and everyday
                financial operations.
              </p>

              <p>
                From digital payments and transfers to invoices, payroll,
                inventory and business analytics, AlinPay brings essential
                financial and business tools into one connected experience.
              </p>

              <Link href="/about" className="btn-read-more">
                <span>Discover AlinPay</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row gy-4">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="col-md-6" key={item.title}>
                    <div className="alin-mini-card p-4">
                      <Icon size={30} className="alin-highlight" />
                      <h4 className="mt-3">{item.title}</h4>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}