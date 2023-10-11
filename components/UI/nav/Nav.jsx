"use client";
import { useStore } from "@/store/store";
import classes from "./Nav.module.css";
import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import data from "../../../dictionaries/en.json";
import data2 from "../../../dictionaries/ru.json";

export default function Nav() {
	const lang = useStore((state) => state.lang);
	const [list, setList] = useState([]);

	useLayoutEffect(() => {
		lang === "RU" ? setList(data2.nav.list) : setList(data.nav.list);
	}, [lang]);

	return (
		<nav
			className={classes.Nav}>
			{list.map((el, index) => (
				<Link key={index} href={el.link}>
					{el.title}
				</Link>
			))}
		</nav>
	);
}
