import React, { createContext, useState, SetStateAction, Dispatch, useContext } from "react";

interface LanguageProviderProps {
	children: React.ReactNode;
}

type languagesType = string[];

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
	const [languages, setLanguages] = useState<languagesType>([]);

	return (
		<LanguageContext.Provider value={{ languages, setLanguages }}>
			{children}
		</LanguageContext.Provider>
	);
};

interface LanguageContextType {
	languages: languagesType;
	setLanguages: Dispatch<SetStateAction<languagesType>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const useLanguageList = () => {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error('Cannot find LanguageContext');
	}

	return context;
}

export { LanguageContext, LanguageProvider, useLanguageList };
