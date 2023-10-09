"use client";
import Image from "next/image";
import classes from "./HomeInspirationContent.module.css";
import russia from "@/public/russia.webp";
import uzbekistan from "@/public/uzbekistan.webp";
import georgia from "@/public/georgia.webp";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import { motion } from "framer-motion";

const ruTitle1 = "Россия";
const ruTitle2 = "Узбекстан";
const ruTitle3 = "Грузия";
const enTitle1 = "Russia";
const enTitle2 = "Uzbekistan";
const enTitle3 = "Georgia";

export default function HomeInspirationContent() {
	const [title, setTitle] = useState("");
	const [title2, setTitle2] = useState("");
	const [title3, setTitle3] = useState("");
	const lang = useStore((state) => state.lang);

	useEffect(() => {
		lang === "RU"
			? setTitle(ruTitle1) & setTitle2(ruTitle2) & setTitle3(ruTitle3)
			: setTitle(enTitle1) & setTitle2(enTitle2) & setTitle3(enTitle3);
	}, [lang]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.3, duration: 0.3 }}
			className={classes.HomeInspirationContent}>
			<Link href={"/blog"} className={classes.item}>
				<Image src={russia} className={classes.img} priority alt='s' />
				<p className={classes.title}>{title}</p>
			</Link>
			<Link href={"/blog"} className={classes.item2}>
				<Image src={uzbekistan} className={classes.img} priority alt='s' />
				<p className={classes.title}>{title2}</p>
			</Link>
			<Link href={"/blog"} className={classes.item3}>
				<Image src={georgia} className={classes.img} priority alt='s' />
				<p className={classes.title}>{title3}</p>
			</Link>
		</motion.div>
	);
}
