import { useContext } from "react";
import { CurrenciesContext } from "../../context/currencies";

const useCurrencies = () => useContext(CurrenciesContext);

export { useCurrencies }