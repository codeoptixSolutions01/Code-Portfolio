/** @format */

import Contact from "./contact"
import ContactImage from "./contactimage"
import { Box, Grid, Typography } from "@mui/material"
import classes from "./contact.module.css"
// import Image from "next/image"
import Header from "./Header"

export default function ContactForm() {
	
  return (
    <>
      <Box id='contact' className={classes.contact}>
        <Header />
        <Grid container spacing={2} className={classes.section}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ContactImage />
          </Grid>

					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Contact />
					</Grid>
				</Grid>
			</Box>
		</>
	)
}
