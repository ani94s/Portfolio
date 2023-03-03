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
  Intro,
  Stats,
  Testimonials,
  Navbar,
} from "./components";

const App = () => (
  <div className="bg-primary w-[100%] text-white overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} w-[100%]`}>
      {/* border-b border-slate-800 shadow-md */}
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart} w-full`}>
      <div className={`${styles.boxWidth}`}>
        <Intro />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
