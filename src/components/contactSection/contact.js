"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
// emailjs
import emailjs from "@emailjs/browser";
// react toast for alert message
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./contact.module.css"

import {
	TextField,
	Typography,
	Grid,
	Checkbox,
	Button,
	Stack,
	Box,
	CircularProgress,
} from "@mui/material"

export default function Contact() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			user_name: "",
			email: "",
			message: "",
		},
	})

	// 	// loading state
	const [isLoading, setIsLoading] = useState(false)

	// 	// messagestate

	// const [message, setMessage] = useState(" ")

	// onsubmit fnctionality

	const onSubmit = async (data) => {
		try {
			setIsLoading(true)
			console.log(data)

			// Simulating an asynchronous action (e.g., sending an email)
			await new Promise((resolve) => setTimeout(resolve, 2000))

			// Sending email using emailjs
			await emailjs.send(
				"service_au08qxa",
				"template_qj3r90k",
				data,
				"20akJEJS8JwKmmkBY"
			)

			// Show a success toast
			toast.success("Email successfully sent!", { autoClose: 3000 })

			// Reset the form after submission
			reset()
		} catch (error) {
			console.error("Error submitting form:", error)
			// Show an error toast
			toast.error("Error submitting form. Please try again later.", {
				autoClose: 3000,
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<ToastContainer />

			<Box>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<Stack mb={2} mt={2}>
						<TextField
							size="small"
							label="name"
							mb={2}
							type="user_name"
							id="user_name"
							placeholder="name"
							{...register("user_name", {
								required: "username is required ",
							})}
							error={Boolean(errors.user_name)}
							helperText={errors.user_name?.message}
						/>
					</Stack>
					<Stack mb={2} mt={2}>
						<TextField
							size="small"
							mb={2}
							label="email"
							type="email"
							placeholder="Email"
							id="email"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value:
										/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
									message: "Please enter a valid email address",
								},
							})}
							error={Boolean(errors.email)}
							helperText={errors.email?.message}
						/>
					</Stack>
					<Stack>
						<TextField
							size="small"
							mb={2}
							type="text"
							id="message"
							label="message"
							placeholder="Type your Message here"
							variant="outlined"
							multiline
							rows={3}
							{...register("message", {
								required: "message  is required ",
							})}
							error={Boolean(errors.message)}
							helperText={errors.message?.message}
						/>
					</Stack>

					<Stack 	mt={2} alignItems="center">
						<Button
							className={styles.button}
							variant="contained"
							size="small"
							color="primary"
							type="submit"
							// disabled={!isValid || isLoading}
						>
							{isLoading ? (
								<CircularProgress size={24} color="inherit" />
							) : (
								"Send"
							)}
						</Button>
					</Stack>
				</form>
			</Box>
		</>
	)
}
