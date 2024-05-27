import React from "react";
import styles from "./Intro.module.scss";

const IntroSection = () => (
  <section id="intro" className={styles.introSection}>
    <div className={styles.paragraphContainer}>
      <h3>hey there!</h3>
      <p className={styles.paragraph}>
        I'm Alice, a junior studying Computer Science at Princeton! My first
        time coding was as a freshman in university, and I've since organized 4
        hackathons and learned 7 programming languages! My interests lie in
        machine learning, distributed systems, and full-stack development. I
        love building and I'm always looking for opportunities to learn and
        grow, so please feel free to reach out! I'd love to chat.
      </p>
      <p className={styles.paragraph}>
        <img src="/email.svg" alt="Email" className={styles.emailIcon} />
        <span className={styles.typewriter}>
          ah5087 [at] princeton [dot] edu
        </span>
      </p>
    </div>
    <div className={styles.photoContainer}>
      <img src="/headshot.jpg" className={styles.photo} alt="Alice Hou" />
      <div className={styles.introTitle}>Alice Hou</div>
    </div>
  </section>
);

export default IntroSection;
