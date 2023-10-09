"use client";
import { useEffect, useState } from "react";
import classes from "./SearchComp.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { useStore } from "@/store/store";

const placeholderRu = "Куда вы хотите?"
const placeholderEn = "Where you want?"

export default function SearchComp() {
	const [value, setValue] = useState("");
	const [title,setTitle] = useState("")
	const lang = useStore(state => state.lang)

	useEffect(()=>{
		lang === "RU" ? setTitle(placeholderRu) : setTitle(placeholderEn)
	},[lang])

	return (
		<div className={classes.SearchComp}>
			<input
				type='text'
				placeholder={title}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<HiOutlineSearch />
		</div>
	);
}
