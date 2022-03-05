import styles from "../styles/intro.module.css";
import Image from "next/image";
import Link from "next/link";
const Introduction = () => {
  return (
    <div className={styles.introContent}>
      <div className={styles.mainContent}>
        <div className={styles.heading}>Machine Leaning projects</div>
        <div className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
        <div className={styles.learnMore}>
          <Link href="/learnmore">
            <button>LEARN MORE</button>
          </Link>
        </div>
      </div>
      <div className={styles.displayImage}>
        <Image
          src="/AI-in-Buyers-Journey-1.png"
          alt="Vision AI neural Image"
          width={500}
          height={370}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Introduction;
