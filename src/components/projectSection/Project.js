// import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import PHP from "../../../public/assets/projects/Phpproject.jpg";
import REDUX from "../../../public/assets/projects/E-commercesiteRedux.jpg";
import NEXT from "../../../public/assets/projects/Next.js.jpg";
import ECOM from "../../../public/assets/projects/E-commercessite.jpg";
import NEXTR from "../../../public/assets/projects/Next.jssmallscreenjpg.jpg";
// import Group6 from "../../../public/assets/Group 6.png";
import Header from "./Header";
import styles from "./Project.module.css";
import '../../app/globals.css';

export default function ProjectSection() {
  return (
    <>
      {/* <Box id="projects" sx={{ marginBottom: " 20px" }}>
        <Header />
    
        <Grid
          container
          direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
          spacing={2}
          sx={{ my: { xs: 2, sm: 4 } }}
        >
          <Grid item xs={12} sm={12} md={6}>

            <Image
              src={PHP}
              className={styles.images}
              alt="PHP, Symfony,Boostrap, Docker"
            />

            <Typography textAlign="center" className={styles.typo}>
              PHP, Symfony,Boostrap, Docker
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Image
              src={ECOM}
              alt="E-COMMERCE(REDUX)"
              className={styles.images}
            />
            <Typography textAlign="center" className={styles.typo}>
              REACT-VITE, AXIOSCONFIG, MATERIAL UI, REACT-HOOK-FORMS
            </Typography>
          </Grid>
        </Grid>

       
        <Grid
          container
          direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
          spacing={2}
          sx={{ my: { xs: 2, sm: 4 } }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Image
              src={NEXT}
              className={styles.images}
              alt="Next.js, DaisyUI,Tailwind CSS, Typescript"
            />
            <Typography textAlign="center" className={styles.typo}>
              Next.js, DaisyUI,Tailwind CSS, Typescript
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Image
              src={NEXTR}
              alt="E-Commerce site"
              className={styles.images}
            />
            <Typography textAlign="center" className={styles.typo}>
              NEXT.JS APPLICATION ON SMALL DEVICES
            </Typography>
          </Grid>
        </Grid>


        <Grid
          container
          direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
          spacing={2}
          sx={{ my: { xs: 2, sm: 4 } }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Image src={REDUX} className={styles.images} alt="Ecommerce" />
            <Typography textAlign="center" className={styles.typo}>
              E-commerce website-react.js,Bootstrap and redux.js
            </Typography>
          </Grid>
        </Grid>
      </Box> */}
      <div sx={{ marginBottom: " 20px" }}>
        <Header />
        <div className={styles.container}>
          <div className={styles.img_container}>
            <div className={styles.img_wrapper}>
              <Image
                src={PHP}
                className={styles.images}
                alt="PHP, Symfony,Boostrap, Docker"
              />
            </div>

            <h3 className={styles.typo}> PHP, Symfony,Boostrap, Docker</h3>
          </div>
          <div className={styles.img_container}>
            <div className={styles.img_wrapper}>
              <Image
                src={ECOM}
                alt="E-COMMERCE(REDUX)"
                className={styles.images}
              />
            </div>

            <h3 className={styles.typo}>
              {" "}
             REACT-VITE, AXIOSCONFIG,

            </h3>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.img_container}>
            <div className={styles.img_wrapper}>
            <Image
              src={NEXT}
              className={styles.images}
              alt="Next.js, DaisyUI,Tailwind CSS, Typescript"
            />
            </div>
           
            <h3 className={styles.typo}> PHP, Symfony,Boostrap, Docker</h3>
          </div>
          <div className={styles.img_container}>
          <div className={styles.img_wrapper}>
          <Image
              src={NEXTR}
              alt="E-Commerce site"
              className={styles.images}
            />
          </div>
          
            <h3 className={styles.typo}>
              {" "}
              NEXT.JS APPLICATION ON SMALL DEVICES
            </h3>
          </div>
        </div>


       
      </div>
    </>
  );
}
