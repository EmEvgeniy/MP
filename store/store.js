import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
	persist(
		(set) => ({
			lang: "EN",
			currency: "USD",
			linkListEng: [
				{ title: "Trips", link: "trip" },
				{ title: "Tour organizers", link: "tour_organizers" },
				{ title: "Help", link: "help" },
				{ title: "Sign in", link: "login" },
				{ title: "Sign up", link: "sign_up" },
			],
			linkListRu: [
				{ title: "Путешествия", link: "trip" },
				{ title: "Организаторы туров", link: "tour_organizers" },
				{ title: "Помощь", link: "help" },
				{ title: "Войти", link: "login" },
				{ title: "Зарегистрация", link: "sign_up" },
			],
			date: "",
			dateStatus: false,
			currencyList: ["USD", "RUB", "EURO"],
			langList: ["EN", "RU"],
			changeLang: (lang) => set((state) => ({ lang: lang })),
			changeCurrency: (currency) => set((state) => ({ currency: currency })),
			changeDate: (date) => set((state) => ({ date: date })),
			changeDateStatus: (status) => set((state) => ({dateStatus: status}))
		}),
		{
			name: "storage",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);
