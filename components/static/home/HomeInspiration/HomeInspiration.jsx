import Container from "@/components/wrappers/container/Container";
import classes from "./HomeInspiration.module.css";
import HomeInspirationTitle from "./HomeInspirationTitle/HomeInspirationTitle";
import HomeInspirationContent from "./HomeInspirationContent/HomeInspirationContent";

export default function HomeInspiration() {
	return (
		<section className={classes.HomeInspiration}>
			<Container>
				<div className={classes.inner}>
					<HomeInspirationTitle />
					<HomeInspirationContent />
				</div>
			</Container>
		</section>
	);
}
