import React, { useState } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <h5>
              <a href="/#/">alice</a>
            </h5>
          </div>
          <div className={styles.nav}>
            <a className="navContainerItem" id="0" href="/#/" draggable={false}>
              <p>about me</p>
            </a>
            <a className="navContainerItem" id="1" href="/#/" draggable={false}>
              <p>projects</p>
            </a>
            <a className="navContainerItem" id="2" href="/#/" draggable={false}>
              <p>experience</p>
            </a>
          </div>
        </div>
      </div>
      <span className={styles.divider}></span>
      {children}
    </>
  );
};

export default Layout;
