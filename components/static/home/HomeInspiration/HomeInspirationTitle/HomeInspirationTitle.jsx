"use client";
import Link from "next/link";
import classes from "./HomeInspirationTitle.module.css";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import { motion } from "framer-motion";

const ruTitle = "Места для вдохновения";
const enTitle = "Places for inspiration";
const ruText = "Подборка популярных сегодня направлений по типам";
const enText = "A selection of popular destinations by type today";
const ruBtn = "Узнать больше";
const enBtn = "See more";

export default function HomeInspirationTitle() {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [btn, setBtn] = useState("");
	const lang = useStore((state) => state.lang);

	useEffect(() => {
		lang === "RU"
			? setTitle(ruTitle) & setText(ruText) & setBtn(ruBtn)
			: setTitle(enTitle) & setText(enText) & setBtn(enBtn);
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
			<Link href={"/blog"} className={classes.btn}>
				{btn}
			</Link>
		</motion.div>
	);
}
