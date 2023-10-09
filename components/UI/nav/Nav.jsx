'use client'
import { useStore } from "@/store/store";
import classes from './Nav.module.css'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const ru = [
	{ title: "Путешествия", link: "trip" },
	{ title: "Организаторы", link: "tour_organizers" },
	{ title: "Помощь", link: "help" },
];
const eng = [
	{ title: "Trips", link: "trip" },
	{ title: "Tour organizers", link: "tour_organizers" },
	{ title: "Help", link: "help" },
];
export default function Nav() {
	const lang = useStore((state) => state.lang);
	const [list, setList] = useState([]);

	useEffect(() => {
		lang === "RU" ? setList(ru) : setList(eng);
	}, [lang]);
	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.5, duration: .5 }}
			className={classes.Nav}>
			{list.map((el, index) => (
				<Link key={index} href={el.link}>
					{el.title}
				</Link>
			))}
		</motion.nav>
	)
}
