"use client";
import Link from "next/link";
import classes from "./HomeSubscribeTitle.module.css";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import { motion } from "framer-motion";

const ruTitle = "Подпишитесь на нашу новостную рассылку";
const enTitle = "Subscribe our newsletter";
const ruText =
	"Собираем лучшие направления путешествий от авторов и рассылаем 2 раза в неделю.";
const enText =
	"We collect the best travel destinations from authors and send out 2 times a week";

export default function HomeSubscribeTitle() {
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
			className={classes.HomeInspirationTitle}>
			<h2 className={classes.title}>{title}</h2>
			<p className={classes.text}>{text}</p>
		</motion.div>
	);
}
