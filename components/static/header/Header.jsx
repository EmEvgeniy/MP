"use client";
import Container from "@/components/wrappers/container/Container";
import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Links = dynamic(() => import("@/components/UI/links/Links"), {
	ssr: false,
});
const Nav = dynamic(() => import("@/components/UI/nav/Nav"));
const Logo = dynamic(() => import("@/components/UI/logo/Logo"));
const Burger = dynamic(() => import("@/components/UI/burger/Burger"));

export default function Header() {
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

	useEffect(() => {
		if (pathName !== "/") {
			setActive(true);
			setActive2(true);
		} else {
			setActive(false);
			setActive2(false);
		}
	}, [pathName]);

	return (
		<header
			className={
				active & !active2
					? `${classes.Header} ${classes.active}`
					: active2
					? `${classes.Header} ${classes.active2}`
					: `${classes.Header}`
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
