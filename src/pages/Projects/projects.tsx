import React from "react";
import styles from "./Projects.module.scss";
import commonStyles from "../../styles/Common.module.scss";

const projects = [
  {
    title: "Slack Bot",
    languages: "Python",
    description:
      "Automated onboarding bot integrated into Slack, which manages user channels using emoji reactions and features a customizable welcome message.",
    video: "https://www.youtube.com/embed/6ExcNBB_x_0", // Ensure this is the correct embed URL format
    repo: "https://github.com/ah5087/slack-bot",
  },
  {
    title: "Personal Website",
    languages: "React, TypeScript",
    description: "Developed this website from scratch!",
    image: "",
    repo: "https://github.com/username/project2",
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
        Re-implementation of{" "}
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
        Learning), our paper is linked.
      </>
    ),
    image: "",
    repo: "https://github.com/eugenechoi2004/metra",
    pdf: "/cos435_metra.pdf", // Path to the PDF file
  },
  // Add more projects as needed
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
            {project.pdf && (
              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pdfLink}
              >
                <img
                  src="/download.svg" // Ensure you have a PDF icon in the public folder
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
