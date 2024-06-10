import { createContext, useState } from "react";
import { CurrenciesContextProps, CurrenciesProviderProps } from "./currencies.types";

const CurrenciesContext = createContext<CurrenciesContextProps>({
    currencies: [],
    setCurrencies: (_currencies: string[]) => {}
})

const CurrenciesProvider = ({ children }: CurrenciesProviderProps) => {
    
    const [currencies, setCurrencies] = useState<string[]>([]);

    return (
        <CurrenciesContext.Provider value={{ currencies, setCurrencies }}>
            {children}
        </CurrenciesContext.Provider>
    )

}

export { CurrenciesProvider, CurrenciesContext }