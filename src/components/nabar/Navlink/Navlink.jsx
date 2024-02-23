import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import styles from "../navbar.module.css";


const navLink = {
  color :'black',
}
const Navlink = () => {
  const navLink ={
    color:'black',
  }
  return (
    <>
<Box className={styles.navItem}>
        <Box className={styles.ulItem}>
          <Link href="#about" style={navLink} className={styles.navlink}>
            About
          </Link>
          <Link href="#contact" style={navLink} className={styles.navlink}>
            Contact
          </Link>
          <Link href="#project" style={navLink} className={styles.navlink}>
            Projects
          </Link>
          <Link href="#service" style={navLink} className={styles.navlink}>
            Services
          </Link>
        </Box>
   
        <button className={styles.button}>
           <Link href='#' className={styles.buttonText}>Let's Connect</Link>
        </button>
      </Box>
    </>
  );
};

export default Navlink;
