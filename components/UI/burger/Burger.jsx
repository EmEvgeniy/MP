"use client";
import classes from "./burger.module.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useStore } from "@/store/store";
import Links from "../links/Links";
const Langs = dynamic(() => import("../langs/Langs"), { ssr: false });
const Currency = dynamic(() => import("../currency/Currency"), { ssr: false });

function Burger() {
	const [active, setActive] = useState(false);
	const lang = useStore((state) => state.lang);
	const [list, setList] = useState([]);
	const linkListRu = useStore((state) => state.linkListRu);
	const linkListEng = useStore((state) => state.linkListEng);

	useEffect(() => {
		lang === "RU" ? setList(linkListRu) : setList(linkListEng);
	}, [lang, linkListRu, linkListEng]);

	const handleClick = () => {
		setActive(!active);
	};
	useEffect(() => {
		active
			? document.querySelector("body").classList.add("hold")
			: document.querySelector("body").classList.remove("hold");
	}, [active]);
	return (
		<div className={classes.Burger}>
			<motion.span
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				key={active}
				transition={{ delay: 0.2, duration: 0.2 }}
				className={
					active
						? `${classes.burger_icon} ${classes.active}`
						: `${classes.burger_icon}`
				}
				onClick={handleClick}>
				{active ? <AiOutlineClose /> : <FiMenu />}
			</motion.span>
			<nav
				className={
					active ? `${classes.nav} ${classes.active}` : `${classes.nav}`
				}>
				{list.map((el, index) => (
					<motion.p
						initial={{ x: "-200%", opacity: 0 }}
						animate={active ? { x: 0, opacity: 1 } : { x: "-200%", opacity: 0 }}
						transition={{ delay: `0.3${index}`, duration: 0.3 }}
						key={el.title}>
						<Link href={`/${el.link}`}>{el.title}</Link>
					</motion.p>
				))}
				<motion.div
					initial={{ x: "-200%", opacity: 0 }}
					animate={active ? { x: 0, opacity: 1 } : { x: "-200%", opacity: 0 }}
					transition={{ delay: 0.35, duration: 0.3 }}
					className={classes.btns}>
					<Links />
				</motion.div>
			</nav>
		</div>
	);
}

export default Burger;
