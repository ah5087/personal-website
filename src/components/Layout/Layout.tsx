import { useState } from "react";
import styles from "./Layout.module.scss";
import Modal from "./Modal"; // Ensure this component exists

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="#intro">
            <img
              src="/dog.jpg"
              alt="Home"
              className={styles.homeIcon}
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </div>
        <div className={styles.nav}>
          <a
            className={styles.navContainerItem}
            id="0"
            href="#about_me"
            draggable={false}
          >
            about me
          </a>
          <a
            className={styles.navContainerItem}
            id="1"
            href="#projects"
            draggable={false}
          >
            projects
          </a>
          <a
            className={styles.navContainerItem}
            id="2"
            href="#experience"
            draggable={false}
          >
            experience
          </a>
        </div>
        <div className={styles.sayHiContainer}>
          <button onClick={toggleModal} className={styles.sayHiButton}>
            say hi!
          </button>
        </div>
      </div>
      <div className={styles.container}>
        <span className={styles.divider}></span>
        {children}
      </div>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </>
  );
};

export default Layout;
