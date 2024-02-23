import Image from "next/image";
import Link from "next/link";
import mouse from "../../../public/assets/Mask group.png";
import vector from "../../../public/assets/Group 9.png";
import styles from "./hero.module.css";
const HeroImage = () => {
  return (
    <>
      <div className={styles.welcome}>
        <div className={styles.welcomeText}>
          <div>
            <span>Welcome to Code Optix</span>
          </div>
          <div>
            <span>Solutions - Crafting</span>
          </div>
          <div>
            <span>Digital Excellence</span>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <Link href="">Contact Us</Link>
        </button>
      </div>

      <div className={styles.imgContainer}>
        <Image src={mouse} alt="mouse" className={styles.img}/>
      </div>

      <div className={styles.vector}>
        <Image src={vector} alt="group9" className={styles.img}/>
      </div>
    </>
  );
};

export default HeroImage;
