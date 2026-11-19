
import Link from "next/link";
import { ArrowRight, ShieldCheck, Wallet } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <h1>
              Financial Trust,
              <br />
              <span className="alin-highlight">Freedom for All.</span>
            </h1>

            <p>
              Simplify payments, manage your finances, and run your
              business with AlinPay — one platform built for your
              financial freedom.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Link href="/#contact" className="btn-get-started">
                Get Started <ArrowRight size={18} />
              </Link>

              <Link href="/#features" className="btn-watch-video">
                Explore Features
              </Link>
            </div>

            <div className="d-flex gap-4 mt-4">
              <div>
                <ShieldCheck size={22} />
                <span>Secure Payments</span>
              </div>
              <div>
                <Wallet size={22} />
                <span>Smarter Finance</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="alin-dashboard">
              <div className="alin-dashboard-panel">
                <p className="alin-dashboard-label">
                  Business Overview
                </p>
                <h3 className="alin-dashboard-amount">
                  KSh 248,500
                </h3>
                <p>Available balance</p>

                <div className="row mt-4">
                  <div className="col-6">
                    <div className="alin-mini-card">
                      <span>Money received</span>
                      <h5>KSh 86,200</h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="alin-mini-card">
                      <span>Payments</span>
                      <h5>KSh 32,400</h5>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="alin-dashboard-label">
                    Your business, all in one place.
                  </p>
                  <div className="d-flex justify-content-between">
                    <span>Payments</span>
                    <span>Invoices</span>
                    <span>Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
