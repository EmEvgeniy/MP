"use client";
import Image from "next/image";
import classes from "./FooterContent.module.css";
import logo from "@/public/logo.svg";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import FooterSocialLinks from "./FooterSocialLinks/FooterSocialLinks";
import Link from "next/link";

const ruText =
	"Авторские туры – новый подход к неизведанным маршрутам путешествий";
const enText = "Author's tours - a new approach to unexplored travel routes";

const enArr = [
	{
		title: "About",
		obj: [
			{ text: "About us", link: "about_us" },
			{ text: "How to book a tour", link: "How_to_book_a_tour" },
			{ text: "News & Blog", link: "News_Blog" },
			{ text: "Travelers` reviews", link: "Travelers_reviews" },
		],
	},
	{
		title: "Company",
		obj: [
			{ text: "Affiliate program", link: "Affiliate_program" },
			{ text: "Work with us", link: "Work_with_us" },
			{ text: "Become a tour author", link: "Become_a_tour_author" },
			{ text: "Corporate tours", link: "Corporate_tours" },
		],
	},
	{
		title: "Support",
		obj: [
			{ text: "FAQs", link: "FAQs" },
			{ text: "Support center", link: "Support_center" },
			{ text: "Contact us", link: "Contact_us" },
		],
	},
];
const ruArr = [
	{
		title: "О нас",
		obj: [
			{ text: "О нас", link: "about_us" },
			{ text: "Как забронировать тур", link: "How_to_book_a_tour" },
			{ text: "Новости и блог", link: "News_Blog" },
			{ text: "Отзывы путешественников", link: "Travelers_reviews" },
		],
	},

	{
		title: "Компания",
		obj: [
			{ text: "Партнерская программа", link: "Affiliate_program" },
			{ text: "Работайте с нами", link: "Work_with_us" },
			{ text: "Станьте автором тура", link: "Become_a_tour_author" },
			{ text: "Корпоративные туры", link: "Corporate_tours" },
		],
	},
	{
		title: "Поддержка",
		obj: [
			{ text: "Часто задаваемые вопросы", link: "FAQs" },
			{ text: "Центр поддержки", link: "Support_center" },
			{ text: "Свяжитесь с нами", link: "Contact_us" },
		],
	},
];
const enLink = [
	{ title: "Terms & Agreements", link: "Terms_Agreements" },
	{ title: "Privacy policy", link: "Privacy_policy" },
];
const ruLink = [
	{ title: "Условия и соглашения", link: "Terms_Agreements" },
	{ title: "Политика конфиденциальности", link: "Privacy_policy" },
];
export default function FooterContent() {
	const [text, setText] = useState("");
	const [list, setList] = useState([]);
	const [links, setLinks] = useState([]);
	const lang = useStore((state) => state.lang);
	useEffect(() => {
		lang === "RU"
			? setText(ruText) & setList(ruArr) & setLinks(ruLink)
			: setText(enText) & setList(enArr) & setLinks(enLink);
	}, [lang]);
	return (
		<div className={classes.FooterContent}>
			<div className={classes.top}>
				<div className={classes.left}>
					<Image src={logo} width={200} height={100} alt='logo' />
					<p className={classes.text}>{text}</p>
					<FooterSocialLinks />
				</div>
				<div className={classes.nav}>
					{list.map((el, index) => (
						<div key={index} className={classes.card}>
							<p className={classes.title}>{el.title}</p>
							<div className={classes.list}>
								{el.obj.map((item, index) => (
									<Link key={index} href={`/${item.link}`}>
										{item.text}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={classes.bottom}>
				<p className={classes.rights}>
					@ 2023 Minzifatravel. All rights reserved
				</p>
				<div className={classes.bottom_inner}>
					{links.map((el, index) => (
						<Link key={index} href={`/${el.link}`}>
							{el.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
