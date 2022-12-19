import React from "react";
import styles from "./style";

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Feedback,
  Footer,
  GetStarted,
  Hero,
  Stats,
  Testimonials,
  Navbar,
} from "./components";

const App = () => (
  <div className="bg-primary text-white w-full overflow-hidden min-h-screen">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
