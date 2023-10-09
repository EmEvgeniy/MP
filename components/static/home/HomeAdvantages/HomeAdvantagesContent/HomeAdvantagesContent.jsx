"use client";
import { useEffect, useState } from "react";
import classes from "./HomeAdvantagesContent.module.css";
import { useStore } from "@/store/store";
import icon from "@/public/icon.svg";
import icon2 from "@/public/icon2.svg";
import icon3 from "@/public/icon3.svg";
import icon4 from "@/public/icon4.svg";
import Image from "next/image";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { motion } from "framer-motion";

const ruTop = [
	{ num: "5", title: "Year experience" },
	{ num: "5 531", title: "Complete tours" },
	{ num: "190+", title: "Countries" },
];
const enTop = [
	{ num: "5", title: "Лет опыта" },
	{ num: "5 531", title: "Успешных туров" },
	{ num: "190+", title: "Стран" },
];
const ruBottom = [
	{
		num: 1,
		title: "Используйте поиск и фильтры, чтобы найти идеальное путешествие",
		icon: icon,
	},
	{
		num: 2,
		title:
			"Выберите лучшего туристического эксперта по направлению путешествия",
		icon: icon2,
	},
	{
		num: 3,
		title: "Уточните детали понравившегося тура у эксперта по путешествиям",
		icon: icon3,
	},
	{
		num: 4,
		title: "Забронируйте тур через безопасную систему оплаты",
		icon: icon4,
	},
];
const enBottom = [
	{
		num: 1,
		title: "Use the search and filters to find your ideal trip",
		icon: icon,
	},
	{
		num: 2,
		title: "Choose the best travel expert in the direction of travel",
		icon: icon2,
	},
	{
		num: 3,
		title: "Check the details of the tour you like with a travel expert",
		icon: icon3,
	},
	{ num: 4, title: "Book a tour through a secure system payment", icon: icon4 },
];

export default function HomeAdvantagesContent() {
	const [list, setList] = useState([]);
	const [list2, setList2] = useState([]);
	const lang = useStore((state) => state.lang);

	useEffect(() => {
		lang === "RU"
			? setList(ruTop) & setList2(ruBottom)
			: setList(enTop) & setList2(enBottom);
	}, [lang]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={classes.HomeAdvantagesContent}>
			<div className={classes.top}>
				{list.map((el, index) => (
					<div key={index} className={classes.card}>
						<p className={classes.num}>{el.num}</p>
						<p className={classes.title}>{el.title}</p>
					</div>
				))}
			</div>
			<div className={classes.bottom}>
				{list2.map((el, index) => (
					<div key={index} className={classes.card2}>
						<span className={classes.num2}>{el.num}</span>
						{index !== 3 ? (
							<Image src={el.icon} alt='icon' />
						) : (
							<BsFillCreditCard2BackFill
								style={{ width: "70px", height: "70px", color: "#fff" }}
							/>
						)}
						<p className={classes.text}>{el.title}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
}
