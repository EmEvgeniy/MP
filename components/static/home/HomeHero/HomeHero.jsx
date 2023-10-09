import Container from "@/components/wrappers/container/Container";
import classes from "./HomeHero.module.css";
import HomeHeroTitle from "./HomeHeroTitle/HomeHeroTitle";
import HomeSearchForm from "./HomeSearchForm/HomeSearchForm";
import SocialLinks from "../../socialLinks/SocialLinks";
import HomeBlogLink from "./HomeBlogLink/HomeBlogLink";

export default function HomeHero() {
	return (
		<section className={classes.HomeHero}>
			<Container>
				<div className={classes.inner}>
					<HomeHeroTitle />
					<HomeSearchForm />
					<div className={classes.inner_bottom}>
						<SocialLinks />
						<HomeBlogLink/>
					</div>
				</div>
			</Container>
		</section>
	);
}
