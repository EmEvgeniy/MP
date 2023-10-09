"use client";
import { useStore } from "@/store/store";
import classes from "./DateInput.module.css";
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const ru = "Месяц";
const en = "Month";

export default function DateInput() {
	const [title, setTitle] = useState("");
	const [value, setValue] = useState("");
	const text = useStore((state) => state.date);
	const lang = useStore((state) => state.lang);
	const setStatus = useStore((state) => state.changeDateStatus);

	useEffect(() => {
		lang === "RU" ? setTitle(ru) : setTitle(en);
	}, [lang]);

	return (
		<div className={classes.DateInput}>
			<input
				type='text'
				placeholder={title}
				value={
					!text
						? value
						: lang === "RU"
						? text.toLocaleString("ru", {
								month: "long",
						  })
						: text.toLocaleString("en-US", {
								month: "long",
						  })
				}
				onChange={(e) => setValue(e.target.value)}
			/>
			<BsFillCalendar3WeekFill
				className={classes.icon}
				onClick={() => setStatus(true)}
			/>
		</div>
	);
}
