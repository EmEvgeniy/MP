import Container from "@/components/wrappers/container/Container";
import classes from "./HomeTrustBlog.module.css";
import HomeTrustBlogContent from "./HomeTrustBlogContent/HomeTrustBlogContent";

export default function HomeTrustBlog() {
	return (
		<section className={classes.HomeTrustBlog}>
			<Container>
				<HomeTrustBlogContent />
			</Container>
		</section>
	);
}
