"use client";
import { useStore } from "@/store/store";
import classes from "./SearchBtn.module.css";
import { useEffect, useState } from "react";

const ru = "Найти";
const en = "Search";

export default function SearchBtn() {
	const [title, setTitle] = useState("");
	const lang = useStore((state) => state.lang);

	useEffect(() => {
		lang === "RU" ? setTitle(ru) : setTitle(en);
	}, [lang]);

	return <button className={classes.SearchBtn}>{title}</button>;
}
