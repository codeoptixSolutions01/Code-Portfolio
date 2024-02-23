import { Grid, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Group1 from "../../../public/assets/Group 1.png";
import Group2 from "../../../public/assets/Group 2.png";
import Group3 from "../../../public/assets/Group 3.png";
import Group4 from "../../../public/assets/Group 4.png";
import Group5 from "../../../public/assets/Group 5.png";
import Group6 from "../../../public/assets/Group 6.png";
import Header from "./Header";
import styles from "./services.module.css";

export default function ServiceSection() {
  return (
    <>
      <Box id='services' className={styles.service_container}>
        <Header />
        {/* first section */}
        <Grid
          container
          direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
         
         
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ padding: { xs: 2, sm: 4, md: 4, }, }}
          >
             
              <Image
                src={Group1}
                className={styles.images}
                alt="API DEVELOPMENT"

              />

              <Typography textAlign="center" className='typo'>
                API DEVELOPMENT
              </Typography>
      
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ padding: { xs: 2, sm: 4, md: 4, }, }}
          >
       
              <Image
                src={Group2}
                alt="API DEVELOPMENT"
                className={styles.images}
              />
              <Typography textAlign="center" className="typo">
                WEB DEVELOPMENT
              </Typography>
          
          </Grid>
        </Grid>

        {/* second section */}
        <Grid
          container
          direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
        
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ padding: { xs: 2, sm: 4, md:4, },  }}
          >
            
              <Image
                src={Group3}
                className={styles.images}
                alt="APP DEVELOPMENT"
              />
              <Typography textAlign="center" className="typo">
                APP DEVELOPMENT
              </Typography>
         
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ padding: { xs: 2, sm: 4, md:4, },  }}
          >
         
              <Image
                src={Group4}
                alt="WORDPRESS DEVELOPMENT"
                className={styles.images}
              />
              <Typography textAlign="center" className="typo">
                WORDPRESS DEVELOPMENT
              </Typography>
           
          </Grid>
        </Grid>

        {/* Third section */}
        <Grid
          container
          direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
         
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ padding: { xs: 2, sm: 4, md: 4, },  }}
          >
          
              <Image src={Group5} className={styles.images} alt="Ecommerce" />
              <Typography textAlign="center" className="typo">
                E-COMMERCE
              </Typography>
         
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ padding: { xs: 2, sm: 4, md: 4, },  }}
          >
            
              <Image
                src={Group6}
                alt="UI/UX DESIGN"
                className={styles.images}
              />
              <Typography textAlign="center" className="typo">
                UI/UX DESIGN
              </Typography>
           
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
