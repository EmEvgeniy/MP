"use client";
import classes from "./HomePopularToursContent.module.css";
import samar from "@/public/smar.png";
import tbil from "@/public/tbil.png";
import tex from "@/public/tex.png";
import astana from "@/public/astana.png";
import tash from "@/public/tash.png";
import bux from "@/public/bux.png";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart, AiOutlineStar } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsFillCalendarWeekFill, BsGlobeAsiaAustralia } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import axios from "axios";

const en = [
	{
		title: "Tour “Samarkand” for 6 days/nights",
		stars: 4.8,
		days: "6 days",
		seats: "3 seats",
		country_num: 1,
		price_usd: 1024,
		price_rub: 125000,
		price_euro: 975,
		img: samar,
		country: "Uzbekistan",
		city: "Samarkand",
	},
	{
		title: "Tour “Tbilisi” for 5 days/nights",
		stars: 5,
		days: "5 days",
		seats: "13 seats",
		country_num: 1,
		price_usd: 1024,
		price_rub: 125000,
		price_euro: 975,
		img: tbil,
		country: "Georgia",
		city: "Tbilisi",
	},
	{
		title: "Tour “Texas” for 3 days/nights",
		stars: 5,
		days: "3 days",
		seats: "33 seats",
		country_num: 1,
		price_usd: 2024,
		price_rub: 225000,
		price_euro: 1975,
		img: tex,
		country: "USA",
		city: "Texas",
	},
	{
		title: "Tour “Astana” for 4 days/nights",
		stars: 4.3,
		days: "4 days",
		seats: "8 seats",
		country_num: 1,
		price_usd: 1024,
		price_rub: 95000,
		price_euro: 975,
		img: astana,
		country: "Kazakhstan",
		city: "Astana",
	},
	{
		title: "Tour “Tashkent” for 5 days/nights",
		stars: 4.3,
		days: "4 days",
		seats: "18 seats",
		country_num: 1,
		price_usd: 1024,
		price_rub: 95000,
		price_euro: 975,
		img: tash,
		country: "Uzbekistan",
		city: "Tashkent",
	},
	{
		title: "Tour “Bukhara” for 7 days/nights",
		stars: 5,
		days: "7 days",
		seats: "5 seats",
		country_num: 1,
		price_usd: 1424,
		price_rub: 135000,
		price_euro: 1175,
		img: bux,
		country: "Uzbekistan",
		city: "Bukhara",
	},
	{
		title: "Tour “Tbilisi” for 5 days/nights",
		stars: 5,
		days: "5 days",
		seats: "13 seats",
		country_num: 1,
		price_usd: 1024,
		price_rub: 125000,
		price_euro: 975,
		img: tbil,
		country: "Georgia",
		city: "Tbilisi",
	},
	{
		title: "Tour “Texas” for 3 days/nights",
		stars: 5,
		days: "3 days",
		seats: "33 seats",
		country_num: 1,
		price_usd: 2024,
		price_rub: 225000,
		price_euro: 1975,
		img: tex,
		country: "USA",
		city: "Texas",
	},
];
const ru = [
	{
		title: "Тур “Самарканд” 6 дней/ночей",
		stars: 4.8,
		days: "6 дней",
		seats: "3 места",
		country_num: 1,
		price_usd: 1024,
		price_rub: 125000,
		price_euro: 975,
		img: samar,
		country: "Узбекистан",
		city: "Самарканд",
	},
	{
		title: "Тур `Тбилиси`  5 дней/ночей",
		stars: 5,
		days: "5 дней",
		seats: "13 места",
		country_num: 1,
		price_usd: 1024,
		price_rub: 125000,
		price_euro: 975,
		img: tbil,
		country: "Грузия",
		city: "Тбилиси",
	},
	{
		title: "Тур “Техас”  3 дня/ночи",
		stars: 5,
		days: "3 дня",
		seats: "33 места",
		country_num: 1,
		price_usd: 2024,
		price_rub: 225000,
		price_euro: 1975,
		img: tex,
		country: "США",
		city: "Техас",
	},
	{
		title: "Тур “Астана”  4 дня/ночи",
		stars: 4.3,
		days: "4 дня",
		seats: "8 мест",
		country_num: 1,
		price_usd: 1024,
		price_rub: 95000,
		price_euro: 975,
		img: astana,
		country: "Казакстан",
		city: "Астана",
	},
	{
		title: "Тур “Ташкент”  5 дней/ночей",
		stars: 4.3,
		days: "4 дня",
		seats: "18 мест",
		country_num: 1,
		price_usd: 1024,
		price_rub: 95000,
		price_euro: 975,
		img: tash,
		country: "Узбекистан",
		city: "Ташкент",
	},
	{
		title: "Тур “Бухара”  7 дней/ночей",
		stars: 5,
		days: "7 дней",
		seats: "5 мест",
		country_num: 1,
		price_usd: 1424,
		price_rub: 135000,
		price_euro: 1175,
		img: bux,
		country: "Uzbekistan",
		city: "Bukhara",
	},
	{
		title: "Тур `Тбилиси`  5 дней/ночей",
		stars: 5,
		days: "5 дней",
		seats: "13 мест",
		country_num: 1,
		price_usd: 1024,
		price_rub: 125000,
		price_euro: 975,
		img: tbil,
		country: "Грузия",
		city: "Тбилиси",
	},
	{
		title: "Тур “Техас”  3 дня/ночи",
		stars: 5,
		days: "3 дня",
		seats: "33 места",
		country_num: 1,
		price_usd: 2024,
		price_rub: 225000,
		price_euro: 1975,
		img: tex,
		country: "США",
		city: "Техас",
	},
];
const ruTitle = "Больше";
const enTitle = "More";

export default function HomePopularToursContent() {
	const [list, setList] = useState([]);
	const [active, setActive] = useState(false);
	const [active2, setActive2] = useState(null);
	const lang = useStore((state) => state.lang);
	const [title, setTitle] = useState("");
	const [data, setData] = useState([]);
	const [fetchLang, setFetchLang] = useState("en");
	const { isSuccess } = useQuery({
		queryKey: ["countriesList", fetchLang],
		queryFn: async () => {
			const { data } = await axios.get(
				`https://api.turi-uzbekistana.ru/api/v1/tours`
			);
			setData(data);
		},
	});
	console.log(data);
	useEffect(() => {
		lang === "RU"
			? setList(ru) & setTitle(ruTitle) & setFetchLang("ru")
			: setList(en) & setTitle(enTitle) & setFetchLang("en");
	}, [lang]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			key={lang}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={classes.HomePopularToursContent}>
			<div className={classes.inner}>
				{list.map((el, index) => (
					<Link
						href={`/tours/${el.title}`}
						key={index}
						className={classes.card}
						onMouseOver={() => setActive2(index)}
						onMouseLeave={() => setActive2(null)}>
						<Image src={el.img} alt='photo' className={classes.img} />
						<div className={classes.top}>
							<div className={classes.heart}>
								{!active ? (
									<AiOutlineHeart className={classes.icon} />
								) : (
									<AiFillHeart className={classes.icon} />
								)}
							</div>
							<p className={classes.rating}>
								<AiOutlineStar className={classes.icon} />
								<span>{el.stars}</span>
							</p>
						</div>
						<div
							className={
								active2 == index
									? `${classes.bottom} ${classes.active}`
									: `${classes.bottom}`
							}>
							<div className={classes.bottom_top}>
								<p className={classes.city}>{el.city}</p>
								<p className={classes.country}>{el.country}</p>
								<div className={classes.bottom_top_inner}>
									<p className={classes.price}>${el.price_usd}</p>
									{active2 === index ? null : (
										<HiArrowNarrowRight className={classes.icon} />
									)}
								</div>
							</div>
							<div
								className={
									active2 == index
										? `${classes.bottom_bottom} ${classes.active}`
										: `${classes.bottom_bottom}`
								}>
								<p className={classes.desc}>{el.title}</p>
								<div className={classes.bottom_bottom_inner}>
									<p className={classes.days}>
										<BsFillCalendarWeekFill className={classes.icon2} />
										<span>{el.days}</span>
									</p>
									<p className={classes.days}>
										<FaLocationDot className={classes.icon2} />
										<span>{el.seats}</span>
									</p>
									<p className={classes.days}>
										<BsGlobeAsiaAustralia className={classes.icon2} />
										<span>{el.country_num}</span>
									</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			<Link href={"/tours"} className={classes.btn}>
				{title}
			</Link>
		</motion.div>
	);
}
