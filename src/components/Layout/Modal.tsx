import styles from "./Modal.module.scss";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/exit.svg" alt="Close" />
        </button>
        <h2>thanks for stopping by!</h2>
        <p>
          <a
            href="mailto:ah5087@princeton.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            email me
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/alice-hou-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://github.com/ah5087"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Modal;
