"use client";
import Container from "@/components/wrappers/container/Container";
import classes from "./Header.module.css";
import Logo from "@/components/UI/logo/Logo";
import { useEffect, useState } from "react";
import Nav from "@/components/UI/nav/Nav";
import dynamic from "next/dynamic";
const Links = dynamic(() => import("@/components/UI/links/Links"), {
	ssr: false,
});
const Burger = dynamic(() => import("@/components/UI/burger/Burger"), {
	ssr: false,
});

export default function Header() {
	const [active, setActive] = useState(false);
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
	return (
		<header
			className={
				active ? `${classes.Header} ${classes.active}` : `${classes.Header}`
			}>
			<Container>
				<div className={classes.inner}>
					<Logo />
					<div className={classes.rigth}>
						<Nav />
						<Links />
					</div>
					<div className={classes.Burger}>
						<Burger />
					</div>
				</div>
			</Container>
		</header>
	);
}
