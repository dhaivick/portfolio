import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Dhaivick</h1>
      </div>

      <div className={styles.item}>
        <Link href="/" className={styles.navlink}>
          Home
        </Link>
        <Link href="/projects" className={styles.navlink}>
          Projects
        </Link>
        <Link href="/blog" className={styles.navlink}>
          Blog
        </Link>
        <Link href="/contact" className={styles.navlink}>
          Contact
        </Link>
      </div>
    </div>
  );
}
