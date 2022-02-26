import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>LOGO</div>
      <div className={styles.item}>Home</div>
      <div className={styles.item}>
        <div class={styles.dropdown}>
          <button class={styles.dropbtn}>Dropdown</button>
          <div class={styles.dropdownContent}>
            <a href="#">Health</a>
            <a href="#">Face Detection</a>
            <a href="#">Speech Synthesis</a>
            <a href="#">Vision Systems</a>
          </div>
        </div>
      </div>
      <div className={styles.item}>Contact</div>
      <div className={styles.item}>About Us</div>
    </div>
  );
};

export default Header;
