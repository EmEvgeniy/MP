/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["api.minzifatravel.ru"],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "api.minzifatravel.ru",
				port: "",
				pathname: "/media",
			},
		],
	},
};

module.exports = nextConfig;
