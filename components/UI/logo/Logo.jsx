"use client";
import Image from "next/image";
import classes from "./Logo.module.css";
import logo from "@/public/logo.svg";
import logo2 from "@/public/logo2.png";
import { motion } from "framer-motion";
import { useStore } from "@/store/store";
import { useEffect, useState } from "react";

export default function Logo() {
	const lang = useStore((state) => state.lang);
	const [active, setActive] = useState(false);
	useEffect(() => {
		const scrollWin = () => {
			if (window.scrollY > 100) {
				setActive(true);
			} else {
				setActive(false);
			}
		};
		document.addEventListener("scroll", scrollWin);
	});
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			key={lang}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={classes.logo}>
			<Image
				src={active ? logo2 : logo}
				alt='logo'
				width={108}
				height={52}
				priority
			/>
		</motion.div>
	);
}
