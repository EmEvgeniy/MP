"use client";
import { useEffect, useState } from "react";
import classes from "./HomeBlogLink.module.css";
import { useQuery } from "react-query";
import { useStore } from "@/store/store";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const en = "More";
const ru = "Больше";

export default function HomeBlogLink() {
	const [cities, setCities] = useState({});
	const [fetchLang, setFetchLang] = useState("en");
	const [btn, setBtn] = useState("");
	const lang = useStore((state) => state.lang);
	const { isSuccess } = useQuery({
		queryKey: ["blog", fetchLang],
		queryFn: async () => {
			const { data } = await axios.get(
				`https://api.minzifatravel.ru/v1/blogs?locale=${fetchLang}&page=1&size=50`
			);
			setCities(data.items);
		},
	});

	useEffect(() => {
		lang === "RU"
			? setFetchLang("ru") & setBtn(ru)
			: setFetchLang("en") & setBtn(en);
	}, [lang]);
	return (
		<div
			className={classes.HomeBlogLink}>
			{isSuccess && (
				<div className={classes.inner}>
					<div className={classes.text}>
						<p>{cities[0].title}</p>
						<div>
							<Link href={`/blog/${cities[0]?.id}`}>{btn}</Link>
							<HiArrowNarrowRight />
						</div>
					</div>
					<div>
						{cities[0]?.media[0]?.media_url && (
							<Image
								src={
									cities[0]?.media[0]?.media_url
										? cities[0]?.media[0]?.media_url
										: ""
								}
								alt='photo'
								width={150}
								height={100}
								priority
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
