import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>LOGO</div>
        <div className={styles.item}>
          <Link href="/">
            <a style={{ color: "white", textDecoration: "none" }}>Home</a>
          </Link>
        </div>
        <div className={styles.item}>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Dropdown</button>
            <div className={styles.dropdownContent}>
              <a href="#">Health Care</a>
              <a href="#">Face Detection</a>
              <a href="#">Speech Synthesis</a>
              <a href="#">Vision Systems</a>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <Link href="/contact">
            <a style={{ color: "white", textDecoration: "none" }}>Contact</a>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href="/aboutus">
            <a style={{ color: "white", textDecoration: "none" }}>About Us</a>
          </Link>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default Header;
