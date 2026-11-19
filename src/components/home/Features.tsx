import {
  Wallet,
  ArrowLeftRight,
  ReceiptText,
  Users,
  Package,
  BarChart3,
  BellRing,
  MessageCircle,
  ShoppingCart,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Digital Wallet",
    description:
      "Manage your money through a convenient digital wallet designed around everyday transactions.",
  },
  {
    icon: ArrowLeftRight,
    title: "Payments & Transfers",
    description:
      "Make payments and transfer funds with a simpler way to manage your financial transactions.",
  },
  {
    icon: ReceiptText,
    title: "Invoices & Receivables",
    description:
      "Create invoices, track payments and keep your business receivables organised.",
  },
  {
    icon: Users,
    title: "Payroll Management",
    description:
      "Organise employee payments and manage your payroll activities.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Monitor stock and maintain a clearer view of your business inventory.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description:
      "Understand your business activity through organised reports and dashboards.",
  },
  {
    icon: BellRing,
    title: "Debt Reminders",
    description:
      "Keep track of outstanding payments and send timely payment reminders.",
  },
  {
    icon: MessageCircle,
    title: "Business Communication",
    description:
      "Keep business conversations and relevant financial activities connected.",
  },
  {
    icon: ShoppingCart,
    title: "Marketplace",
    description:
      "Access a marketplace experience that connects businesses and suppliers.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features section light-background">
      <div className="container section-title">
        <h2>FEATURES</h2>
        <p>Powerful tools for your financial and business needs</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="col-lg-4 col-md-6" key={feature.title}>
                <div className="feature-box">
                  <div className="alin-feature-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p className="mt-2 mb-0">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}