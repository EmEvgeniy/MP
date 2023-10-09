"use client";
import Link from "next/link";
import classes from "./HomeAdvantagesTitle.module.css";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import { motion } from "framer-motion";

const ruTitle = "Как все настроено ?";
const enTitle = "How is everything set ?";


export default function HomeAdvantagesTitle() {
	const [title, setTitle] = useState("");
	const lang = useStore((state) => state.lang);

	useEffect(() => {
		lang === "RU" ? setTitle(ruTitle) : setTitle(enTitle);
	}, [lang]);
	return (
		<motion.h2
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={classes.HomeInspirationTitle}>
			{title}
		</motion.h2>
	);
}
