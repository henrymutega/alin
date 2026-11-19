import {
  UserPlus,
  SlidersHorizontal,
  ChartNoAxesCombined,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Get Started",
    description:
      "Access AlinPay and get started with the platform using the appropriate account for your needs.",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Manage Your Activities",
    description:
      "Manage payments, transfers, invoices and your everyday business operations.",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Stay Informed",
    description:
      "Use organised dashboards and reports to understand your financial and business activities.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="about section light-background"
    >
      <div className="container section-title">
        <h2>HOW IT WORKS</h2>
        <p>A simpler way to manage your financial activities</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="col-lg-4" key={step.number}>
                <div className="p-4 h-100">
                  <div className="alin-step-number">
                    {step.number}
                  </div>

                  <div className="alin-feature-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}