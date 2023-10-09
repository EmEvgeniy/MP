import HomeAdvantages from "@/components/static/home/HomeAdvantages/HomeAdvantages";
import HomeCities from "@/components/static/home/HomeCities/HomeCities";
import HomeHero from "@/components/static/home/HomeHero/HomeHero";
import HomeInspiration from "@/components/static/home/HomeInspiration/HomeInspiration";
import HomePopularTours from "@/components/static/home/HomePopularTours/HomePopularTours";
import HomeSubscribe from "@/components/static/home/HomeSubscribe/HomeSubscribe";
import HomeTrustBlog from "@/components/static/home/HomeTrustBlog/HomeTrustBlog";

export default function Home() {
	return (
		<>
			<HomeHero />
			<HomeTrustBlog />
			<HomeInspiration />
			<HomePopularTours/>
			<HomeAdvantages/>
			<HomeCities/>
			<HomePopularTours/>
			<HomeSubscribe/>
		</>
	);
}
