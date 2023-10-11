"use client";
import Image from "next/image";
import classes from "./Logo.module.css";
import logo from "@/public/logo.svg";
import logo2 from "@/public/logo2.png";
import { useStore } from "@/store/store";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo() {
	const lang = useStore((state) => state.lang);
	const [active, setActive] = useState(false);
	const [active2, setActive2] = useState(false);
	const pathName = usePathname();
	useEffect(() => {
		const scrollWin = () => {
			if (window.scrollY > 100) {
				setActive(true);
			} else {
				setActive(false);
			}
		};
		document.addEventListener("scroll", scrollWin);
	});
	useLayoutEffect(() => {
		if (pathName !== "/") {
			setActive(true);
			setActive2(true);
		} else {
			setActive(false);
			setActive2(false);
		}
	}, [pathName]);
	return (
		<div
			className={classes.logo}>
			<Link href={"/"}>
				<Image
					src={active & !active2 ? logo2 : active2 ? logo2 : logo}
					alt='logo'
					width={108}
					height={52}
					priority
				/>
			</Link>
		</div>
	);
}
