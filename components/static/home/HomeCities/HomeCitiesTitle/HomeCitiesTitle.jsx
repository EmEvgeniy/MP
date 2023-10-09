"use client";
import { useEffect, useState } from "react";
import classes from "./HomeCitiesTitle.module.css";
import { useStore } from "@/store/store";
import { motion } from "framer-motion";

const enTitle = "WHERE CAN YOU GO NOW ?";
const enText = "A selection of popular destinations by countries today";
const ruTitle = "КУДА МОЖНО ПОЙТИ СЕЙЧАС ?";
const ruText = "Подборка популярных сегодня направлений по странам";

export default function HomeCitiesTitle() {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const lang = useStore((state) => state.lang);

	useEffect(() => {
		lang === "RU"
			? setTitle(ruTitle) & setText(ruText)
			: setTitle(enTitle) & setText(enText);
	}, [lang]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={classes.MainCittiesTitle}>
			<h5 className={classes.title}>{title}</h5>
			<p className={classes.text}>{text}</p>
		</motion.div>
	);
}
