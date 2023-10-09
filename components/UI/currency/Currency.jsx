"use client";
import { useStore } from "@/store/store";
import classes from "./Currency.module.css";
import { BiRuble, BiEuro, BiDollar } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

export default function Currency() {
	const currency = useStore((state) => state.currency);
	const currencyList = useStore((state) => state.currencyList);
	const changeCurrency = useStore((state) => state.changeCurrency);
	const [active, setActive] = useState(false);
	const rootRef2 = useRef(null);

	const handleClickOutside = (e) => {
		if (rootRef2.current && !rootRef2.current.contains(e.target)) {
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
				ref={rootRef2}
				onClick={() => setActive(true)}>
				{currency === "USD" ? (
					<BiDollar />
				) : currency === "RUB" ? (
					<BiRuble />
				) : (
					<BiEuro />
				)}
			</div>
			<ul
				className={
					active ? `${classes.list} ${classes.active}` : `${classes.list}`
				}>
				{currencyList
					.filter((el) => el !== currency)
					.map((el, index) => (
						<li key={index} onClick={() => changeCurrency(el)}>
							{el === "USD" ? (
								<BiDollar />
							) : el === "RUB" ? (
								<BiRuble />
							) : (
								<BiEuro />
							)}
						</li>
					))}
			</ul>
		</div>
	);
}
