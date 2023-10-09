"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const TankStackProvider = ({ children }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
					},
				},
			})
	);
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default TankStackProvider;
