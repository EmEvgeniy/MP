"use client";
import { useEffect, useState } from "react";
import classes from "./HomeTrustBlogContent.module.css";
import { useStore } from "@/store/store";
import { motion } from "framer-motion";

const en = [
	{
		num: 1,
		title: "Secure payment",
		text: "Payment through a reliable system with flexible transfer system",
	},
	{
		num: 2,
		title: "Guaranteed Tours",
		text: "With us you will find more than 100.000 tours with guaranteed departure",
	},
	{
		num: 3,
		title: "Small groups",
		text: "Comfortable atmosphere with travelers like-minded people",
	},
	{
		num: 4,
		title: "Verified travel experts",
		text: "We work with 10.123 travel experts",
	},
	{
		num: 5,
		title: "Verified travel experts",
		text: "We work with 10.123 travel experts",
	},
	{
		num: 6,
		title: "Verified travel experts",
		text: "We work with 10.123 travel experts",
	},
];
const ru = [
	{
		num: 1,
		title: "Безопасный платеж",
		text: "Оплата через надежную систему с гибкой системой переводов",
	},
	{
		num: 2,
		title: "Гарантированные туры",
		text: "У нас вы найдете более 100.000 туров с гарантированным выездом",
	},
	{
		num: 3,
		title: "Малые группы",
		text: "Комфортная атмосфера с путешественниками-единомышленниками",
	},
	{
		num: 4,
		title: "Проверенные эксперты по туризму",
		text: "Мы работаем с 10.123 экспертами по путешествиям",
	},
	{
		num: 5,
		title: "Проверенные эксперты по туризму",
		text: "Мы работаем с 10.123 экспертами по путешествиям",
	},
	{
		num: 6,
		title: "Проверенные эксперты по туризму",
		text: "Мы работаем с 10.123 экспертами по путешествиям",
	},
];

export default function HomeTrustBlogContent() {
	const [list, setList] = useState([]);
	const lang = useStore((state) => state.lang);

	useEffect(() => {
		lang === "RU" ? setList(ru) : setList(en);
	}, [lang]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={classes.HomeTrustBlogContent}>
			{list.map((el) => (
				<div key={el.num} className={classes.card}>
					<span className={classes.num}>{el.num}</span>
					<div className={classes.inner}>
						<p className={classes.title}>{el.title}</p>
						<p className={classes.text}>{el.text}</p>
					</div>
				</div>
			))}
		</motion.div>
	);
}
