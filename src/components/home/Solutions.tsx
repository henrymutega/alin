import Link from "next/link";
import {
  Store,
  Building2,
  ShoppingCart,
  BriefcaseBusiness,
  Hotel,
  Pill,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Store,
    title: "Small & Medium Businesses",
    description:
      "Manage sales, payments, expenses and daily business operations in one connected platform.",
  },
  {
    icon: Building2,
    title: "Organisations & NGOs",
    description:
      "Organise financial activities, payments and operational expenditure.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Wholesale",
    description:
      "Bring payments, inventory and business records closer together.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Manage invoices, receivables, expenses and client payments.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Support everyday payment and operational management activities.",
  },
  {
    icon: Pill,
    title: "Pharmacies & Agrovets",
    description:
      "Keep track of business transactions, inventory and financial records.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="services section">
      <div className="container section-title">
        <h2>OUR SOLUTIONS</h2>
        <p>Supporting businesses across different sectors</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div className="col-lg-4 col-md-6" key={solution.title}>
                <div className="service-item">
                  <div className="alin-feature-icon">
                    <Icon size={26} />
                  </div>

                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>

                  <Link href="/contact" className="read-more">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}