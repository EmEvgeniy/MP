"use client";
import { useEffect, useState } from "react";
import classes from "./HomeSubscribeContent.module.css";
import { useStore } from "@/store/store";
import { motion } from "framer-motion";

const ruIn = "Введите адрес электронной почты";
const enIn = "Enter email";
const ruBtn = "Подписаться";
const enBtn = "Subscribe";

export default function HomeSubscribeContent() {
	const [title, setTitle] = useState("");
	const [btn, setBtn] = useState("");
	const [email, setEmail] = useState("");
	const lang = useStore((state) => state.lang);

	useEffect(() => {
		lang === "RU"
			? setTitle(ruIn) & setBtn(ruBtn)
			: setTitle(enIn) & setBtn(enBtn);
	}, [lang]);
	const handleSubmit = async (event) => {
		event.preventDefault();
		setEmail("");
	};
	return (
		<motion.form
			onSubmit={handleSubmit}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={classes.HomeSubscribeContent}>
			<input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type='text'
				placeholder={title}
			/>
			<button className={classes.btn}>{btn}</button>
		</motion.form>
	);
}
