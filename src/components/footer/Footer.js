import React from "react";
import Image from "next/image";
import Link from "next/link";
import github from "../../../public/assets/github.png";
import instagram from "../../../public/assets/instagram.png";
import telegram from "../../../public/assets/Telegram.png";
import twitter from "../../../public/assets/twitter.png";
import linkedIn from "../../../public/assets/Vector.png";
import styles from "./footer.module.css";
import { Stack, Box } from "@mui/material";

export default function Footer() {
  return (
    <div className={styles.images}>
      {/* github */}
      <div className={styles.footer}>
        <Link href="">
          <Image
            src={github}
            alt="github image"
            aria-description="githubimage"
            className={styles.img}
          />
        </Link>
      </div>

      {/* telegram */}
      <div className={styles.footer}>
        <Link href="">
          <Image
            src={telegram}
            alt="Twitter image"
            aria-description="twitter image"
            className={styles.img}
          />
        </Link>
      </div>

      {/* twitter */}
      <div className={styles.footer}>
        <Link href="">
          <Image
            src={twitter}
            alt="Twitter image"
            aria-description="twitter image"
            className={styles.img}
          />
        </Link>
      </div>

      {/* insta */}
<div className={styles.footer}>
<Link href="">
        <Image
          src={instagram}
          alt="Instagram image"
          aria-description="Instagram image"
          className={styles.img}
        />
      </Link>
</div>
    

      {/* linkedIn */}
      <div className={styles.footer}>
     <Link href="">
        <Image
          src={linkedIn}
          alt="Twitter image"
          aria-description="twitter image"
          className={styles.img}
        />
      </Link>
      </div>

      
     
    </div>
  );
}
