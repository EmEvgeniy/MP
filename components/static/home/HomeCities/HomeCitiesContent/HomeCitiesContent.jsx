"use client";
import { useStore } from "@/store/store";
import classes from "./HomeCitiesContent.module.css";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeCitiesContent() {
	const lang = useStore((state) => state.lang);
	const [list, setList] = useState([]);
	const [fetchLang, setFetchLang] = useState("en");
	const { isSuccess } = useQuery({
		queryKey: ["countriesList", fetchLang],
		queryFn: async () => {
			const { data } = await axios.get(
				`https://api.minzifatravel.ru/v1/countries/${fetchLang}?page=1&size=50`
			);
			setList(data?.items);
		},
	});

	useEffect(() => {
		lang === "RU" ? setFetchLang("ru") : setFetchLang("en");
	}, [lang]);
	return (
		<div className={classes.MainCitiesContent}>
			{isSuccess ? (
				<div className={classes.inner}>
					{list.map((el) => (
						<Link href={`country/${el.name}`} key={el.id}>
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0 }}
								transition={{ delay: `0.${el.id}`, duration: 0.5 }}
								key={el.id}
								className={classes.card}>
								<Image
									src={el.photo_url}
									width={310}
									height={250}
									alt='country'
									className={classes.img}
								/>
								<p className={classes.title}>{el.name}</p>
							</motion.div>
						</Link>
					))}
				</div>
			) : (
				<div className={classes.fake}>
					{[1, 2, 3, 4, 5, 6].map((id) => (
						<Skeleton key={id} height={250} width={310} />
					))}
				</div>
			)}
		</div>
	);
}
