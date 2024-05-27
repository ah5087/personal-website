import styles from "./Experience.module.scss";

const experiences = [
  {
    title: "Executive Director & Partnerships Lead",
    company: "HackPrinceton",
    date: "Sep 2022 – Apr 2024",
    description:
      "Led outreach to raise and manage a $30k+ event budget. Oversaw logistics for 4 hackathons, each with 800+ applicants.",
  },
  {
    title: "Logistics Chair",
    company: "Princeton Women in Entrepreneurship (PWE)",
    date: "Sep 2022 – May 2023",
    description:
      "Coordinated a workshop in New York with Stuart Weitzman, Kate Spade, and Coach for 30 members, featuring an executive panel and business problem-solving workshops.",
  },
  {
    title: "Director of Outreach",
    company: "FemaleFounded",
    date: "Mar 2023 – Sep 2023",
    description:
      "Founding member of Princeton's first female entrepreneurship conference. Secured 30+ speakers across female-founded companies, VCs (Bain, Intel, Two Small Fish Ventures), and industry executives (JPMorgan, IBM, Halara).",
  },
  {
    title: "Software Developer Intern",
    company: "Johnson & Johnson",
    date: "May 2023 – Aug 2023",
    description:
      "Worked on building a re-designed website interface that can be easily styled and reused across different company brands. Leveraged React, Contentful, Stackbit, and Agile Methodologies (Jira).",
  },
  {
    title: "Software Engineering Intern",
    company: "Erie Insurance Group",
    date: "May 2024 – present",
    // description: "In progress.",
  },
];

const Experience = () => (
  <section id="experience" className={styles.experienceSection}>
    <h2>Experience</h2>
    <p className={styles.connect}>
      <a
        href="https://www.linkedin.com/in/alice-hou-/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkedinLink}
      >
        <img
          src="/linkedin.webp"
          alt="LinkedIn"
          className={styles.linkedinIcon}
        />
        LinkedIn
      </a>
    </p>
    {experiences.map((exp, index) => (
      <div key={index} className={styles.experienceItem}>
        <h3 className={styles.title}>{exp.title}</h3>
        <div className={styles.details}>
          <span className={styles.company}>{exp.company}</span>
          <span className={styles.date}> | {exp.date}</span>
        </div>
        <p className={styles.description}>{exp.description}</p>
      </div>
    ))}
  </section>
);

export default Experience;
