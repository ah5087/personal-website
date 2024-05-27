import React from "react";
import styles from "./Projects.module.scss";
import commonStyles from "../../styles/Common.module.scss";

const projects = [
  {
    title: "Slack Bot",
    languages: "Python",
    description:
      "Automated onboarding bot integrated into Slack, which manages user channels using emoji reactions and features a customizable welcome message.",
    video: "https://www.youtube.com/embed/6ExcNBB_x_0",
    repo: "https://github.com/ah5087/slack-bot",
  },
  {
    title: "Personal Website",
    languages: "React, TypeScript",
    description: "Developed this website from scratch!",
    image: "",
    repo: "https://github.com/ah5087/personal-website",
  },
  {
    title: "Expense Tracker",
    languages: "Python (used tkinter for GUI)",
    description:
      "Developed an expense tracking and budget-setting tool that helps you keep track of your total spending and a breakdown of your different spending categories.",
    image: "",
    repo: "https://github.com/ah5087/expense-tracker",
  },
  {
    title: "METRA",
    languages: "Python (tested in DMC and MuJoCo envs)",
    description: (
      <>
        Complete re-implementation (no code references) of{" "}
        <a
          href="https://seohong.me/projects/metra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          METRA
        </a>
        , a novel unsupervised RL objective that can scale to environments with
        high intrinsic dimensionality such as complex image- and pixel-based
        environments. Final project for cos435 (Introduction to Reinforcement
        Learning), our final submitted paper is also linked above.
      </>
    ),
    image: "",
    repo: "https://github.com/eugenechoi2004/metra",
    pdf: "/cos435_metra.pdf",
  },
  {
    title: "Raft (fault-tolerant key/value storage)",
    languages: "Go",
    description: (
      <>
        Complete re-implementation (no code references) of{" "}
        <a
          href="https://raft.github.io/raft.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raft
        </a>
        , a distributed consensus algorithm that manages a replicated state
        machine to maintain fault tolerance in the case of server crashes,
        broken networks, or other failures. Part of cos418 (Distributed Systems)
        coursework. Please contact me for my code if interested!
      </>
    ),
    image: "",
  },
];

const Projects = () => (
  <section
    id="projects"
    className={`${commonStyles.section} ${styles.projectsSection}`}
  >
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <div key={index} className={styles.projectItem}>
        <div className={styles.projectDetails}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <div className={styles.languages}>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <img
                  src="/github-icon.png"
                  alt="GitHub Repository"
                  className={styles.githubIcon}
                />
              </a>
            )}
            {project.pdf && (
              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pdfLink}
              >
                <img
                  src="/download.svg"
                  alt="Download PDF"
                  className={styles.pdfIcon}
                />
              </a>
            )}
            {project.languages}
          </div>
          <p className={styles.description}>{project.description}</p>
        </div>
        {(project.video || project.image) && (
          <div className={styles.projectMedia}>
            {project.video ? (
              <iframe
                className={styles.projectVideo}
                src={project.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={project.title}
              ></iframe>
            ) : (
              project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              )
            )}
          </div>
        )}
      </div>
    ))}
  </section>
);

export default Projects;
