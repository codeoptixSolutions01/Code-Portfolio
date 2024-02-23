import Image from "next/image"
import styles from "./contact.module.css"
import FormImage from "../../../public/assets/form.png"
// import { Box } from "@mui/material"


import { TextField, Typography, Grid, Button, Stack, Box } from "@mui/material";

export default function ContactImage() {
	//   const form = useForm();

	//   const { register, control, handleSubmit, formState } = form;

	// handling form submission
	const onSubmit = (data, e) => {
		e.preventDefault()
		// console.log("form submited", data)
	}
	// handling errors
	//   const { errors } = formState;

	// console.log(register)

	console.log("working!")

	return (
		<Box>
			<Stack
				direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
				//  sx={{  my: { xs: 2, sm:4,  },  }}
			>
				<Image src={FormImage} className={styles.images} alt="Contact Image" />
			</Stack>
		</Box>
	)
}
