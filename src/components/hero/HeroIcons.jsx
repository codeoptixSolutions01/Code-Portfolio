import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import github from "../../../public/assets/github.png";
import instagram from "../../../public/assets/instagram.png";
import telegram from "../../../public/assets/Telegram.png";
import twitter from "../../../public/assets/twitter.png";
import linkedIn from "../../../public/assets/Vector.png";
import styles from "./hero.module.css";
const HeroIcons = () => {
  return (
    <>
    
      <div className={styles.icons}>
          <Link href="">
            <Image src={linkedIn} alt="linkeIn" className={styles.img} />
          </Link>
        </div>

        <div className={styles.icons}>
          <Link href="">
            <Image src={instagram} alt="instagram" className={styles.img} />
          </Link>
        </div>

        <div className={styles.icons}>
          <Link href="">
            <Image src={twitter} alt="twitter" className={styles.img} />
          </Link>
        </div>

        <div className={styles.icons}>
          <Link href="">
            <Image src={telegram} alt="telegram" className={styles.img} />
          </Link>
        </div>

        <div className={styles.icons}>
          <Link href="">
            <Image src={github} alt="github" className={styles.img} />
          </Link>
        </div>
     
     

    </>
  );
};

export default HeroIcons;
