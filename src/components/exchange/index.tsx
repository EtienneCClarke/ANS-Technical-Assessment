import { useState } from "react";
import { useExchangeToBTC } from "../../hooks/blockchainApi";
import { ExchangeProps } from "./exchange.types";
import { useCurrencies } from "../../hooks/useCurrencies";
import Bitcoin from "../../assets/btc_icon.png";
import css from "./exchange.module.css";

const Exchange = ({ defaultCurrency = "USD", defaultValue = 500 }: ExchangeProps) => {

    const [exchangeCurrency, setExchangeCurrency] = useState<string>(defaultCurrency);
    const [exchangeValue, setExchangeValue] = useState<number>(defaultValue);

    const { data, error, loading } = useExchangeToBTC(exchangeCurrency, exchangeValue);
    const { currencies } = useCurrencies();

    return (
        <div className={css.exchange__container}>
            <h2 className={css.title}>Exchange ({exchangeCurrency}) to Bitcoin (BTC)</h2>
            <div className={css.input__container}>
                <input
                    className={css.value_input}
                    onChange={(e) => setExchangeValue(parseFloat(e.target.value))}
                    type="number"
                    value={exchangeValue}
                    placeholder="Enter amount"
                    step={1}
                    max={49999999}
                    />
                <select
                    className={css.currency_select}
                    defaultValue={exchangeCurrency}
                    onChange={(e) => setExchangeCurrency(e.target.value)}
                    >
                    {currencies.map((currency) => {
                        return (
                            <option value={currency} key={currency}>{currency}</option>
                        )
                    })}
                </select>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className={css.swap_icon}>
                <path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z"/>
            </svg>
            <div className={css.exchange_result__container}>
                <img src={Bitcoin} alt="bitcoin icon" className={css.btc_icon} />
                {!loading && data && <p className={css.exchange_result}><span className={css.exchange_amount}>{data}</span> Bitcoin</p> }
                {error && <p className={`${css.exchange_result}`}>{error}</p>}
            </div>
        </div>
    )
}

export { Exchange }