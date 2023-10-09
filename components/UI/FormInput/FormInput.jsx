"use client";
import classes from "./FormInput.module.css";
import { motion } from "framer-motion";

export default function FormInput({
	type,
	placeholder,
	active,
	fn,
	icon,
	lang,
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={
				active ? `${classes.FormInput} ${classes.fail}` : `${classes.FormInput}`
			}>
			{icon}
			<input
				type={type}
				placeholder={placeholder}
				onChange={(e) => fn(e.target.value)}
				className={
					active ? `${classes.input} ${classes.fail}` : `${classes.input}`
				}
			/>
		</motion.div>
	);
}
