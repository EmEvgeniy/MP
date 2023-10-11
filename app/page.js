import dynamic from "next/dynamic";
import HomeHero from "@/components/static/home/HomeHero/HomeHero";
import HomeInspiration from "@/components/static/home/HomeInspiration/HomeInspiration";
import HomePopularTours from "@/components/static/home/HomePopularTours/HomePopularTours";
const HomeSubscribe = dynamic(() =>
	import("@/components/static/home/HomeSubscribe/HomeSubscribe")
);
const HomeCities = dynamic(() =>
	import("@/components/static/home/HomeCities/HomeCities")
);
const HomeTrustBlog = dynamic(() =>
	import("@/components/static/home/HomeTrustBlog/HomeTrustBlog")
);
const HomeAdvantages = dynamic(() =>
	import("@/components/static/home/HomeAdvantages/HomeAdvantages")
);

export default function Home() {
	return (
		<>
			<HomeHero />
			<HomeTrustBlog />
			<HomeInspiration />
			<HomePopularTours />
			<HomeAdvantages />
			<HomeCities />
			<HomePopularTours />
			<HomeSubscribe />
		</>
	);
}
