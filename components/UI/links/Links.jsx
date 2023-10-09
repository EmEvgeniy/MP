"use client";
import Link from "next/link";
import classes from "./Links.module.css";
import { FiLogIn } from "react-icons/fi";
import Langs from "../langs/Langs";
import Currency from "../currency/Currency";
import { motion } from "framer-motion";
import { useStore } from "@/store/store";

export default function Links() {
	const lang = useStore((state) => state.lang);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={classes.Links}>
			<Link href={"/login"}>
				<FiLogIn className={classes.icon} />
			</Link>
			<Langs />
			<Currency />
		</motion.div>
	);
}
