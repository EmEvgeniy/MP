import TankStackProvider from "@/components/wrappers/TankStackProvider/TankStackProvider";
import "./globals.css";
import MainWrapp from "@/components/wrappers/mainWrap/MainWrapp";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "800"],
});
export const metadata = {
	title: "Minzifa-Travel.ru",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<TankStackProvider>
					<MainWrapp>{children}</MainWrapp>
				</TankStackProvider>
			</body>
		</html>
	);
}
