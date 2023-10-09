"use client";
import { useEffect, useState } from "react";
import classes from "./HomePopularToursTitle.module.css";
import { useStore } from "@/store/store";
import { motion } from "framer-motion";

const ru = "Популярные туры";
const en = "Popular tours";

export default function HomePopularToursTitle() {
	const [title, setTitle] = useState("");
	const lang = useStore((state) => state.lang);
	

	useEffect(() => {
		lang === "RU" ? setTitle(ru) : setTitle(en);
	}, [lang]);
	return (
		<motion.h3
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={classes.HomePopularToursTitle}>
			{title}
		</motion.h3>
	);
}
