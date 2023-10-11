import Container from "@/components/wrappers/container/Container";
import classes from "./Trips.module.css";
import TripsFilter from "@/components/static/trips/TripsFilter/TripsFilter";

export default function Trips() {
	return (
		<section className={classes.Trips}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.top}>
						<TripsFilter/>
					</div>
				</div>
			</Container>
		</section>
	);
}
