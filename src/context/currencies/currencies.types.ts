
interface CurrenciesContextProps {
    currencies: string[];
    setCurrencies: (_currencies: string[]) => void;
}

interface CurrenciesProviderProps {
    children?: any;
}

export type {
    CurrenciesProviderProps,
    CurrenciesContextProps
}