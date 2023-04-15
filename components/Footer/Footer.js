import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Dhaivick Jasumal © {new Date().getFullYear()}.
    </footer>
  );
}
