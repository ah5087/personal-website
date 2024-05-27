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
    languages: "TypeScript, React",
    description: "This is a description of Project Two.",
    image: "/project2.jpg",
    repo: "https://github.com/username/project2",
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
            {project.languages}
          </div>
          <p className={styles.description}>{project.description}</p>
        </div>
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
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
          )}
        </div>
      </div>
    ))}
  </section>
);

export default Projects;
