"use client";
import { useEffect, useState } from "react";
import classes from "./HomeHeroTitle.module.css";
import { useStore } from "@/store/store";
import { motion } from "framer-motion";

const en = "Author`s tours - new approach to unexplored travel routes";
const ru = "Авторские туры – новый подход к неизведанным маршрутам путешествий";
const enText = "Discover the world";
const ruText = "Откройте для себя мир";

export default function HomeHeroTitle() {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const lang = useStore((state) => state.lang);
	useEffect(() => {
		lang === "RU"
			? setTitle(ru) & setText(ruText)
			: setTitle(en) & setText(enText);
	}, [lang]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.6, duration: 0.6 }}
			className={classes.MainHeroTitle_wrap}>
			<p className={classes.MainHeroTitle_text}>{text}</p>
			<h1 className={classes.MainHeroTitle_title}>{title}</h1>
		</motion.div>
	);
}
