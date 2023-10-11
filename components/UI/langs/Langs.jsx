"use client";
import { useStore } from "@/store/store";
import classes from "./Langs.module.css";
import { useEffect, useRef, useState } from "react";

export default function Langs() {
	const lang = useStore((state) => state.lang);
	const langList = useStore((state) => state.langList);
	const changeLang = useStore((state) => state.changeLang);
	const [active, setActive] = useState(false);
	const rootRef = useRef(null);

	const handleClickOutside = (e) => {
		if (rootRef.current && !rootRef.current.contains(e.target)) {
			setActive(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div
			className={
				active ? `${classes.Langs} ${classes.active}` : `${classes.Langs}`
			}>
			<div
				className={classes.Langs_title}
				ref={rootRef}
				onClick={() => setActive(true)}>
				<span>{lang}</span>
			</div>
			<ul
				className={
					active ? `${classes.list} ${classes.active}` : `${classes.list}`
				}>
				{langList
					.filter((el) => el !== lang)
					.map((el, index) => (
						<li key={index} onClick={() => changeLang(el)}>
							<span>{el}</span>
						</li>
					))}
			</ul>
		</div>
	);
}
