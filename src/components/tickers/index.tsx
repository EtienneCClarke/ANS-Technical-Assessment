import { useEffect, useState } from "react";
import { useTickerData } from "../../hooks/blockchainApi";
import css from "./tickers.module.css";
import { useCurrencies } from "../../hooks/useCurrencies";

const Tickers = () => {

    const { data, error, loading } = useTickerData();
    const {currencies, setCurrencies} = useCurrencies();

    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        if(!data) return;
        setCurrencies(Object.keys(data));
    }, [data])

    if(loading || error) {
        return (
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>
        )
    }

    const filteredCurrencies = currencies.filter(currency => {
        return currency.toLowerCase().includes(query.toLowerCase());
    })

    if(data) {
        return (
            <div className={css.tickers__container}>
                <h2 className={css.title}>Current price of Bitcoin</h2>
                <input
                    className={css.search_input}
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                />
                {filteredCurrencies.length > 0 ?
                    <>
                        <div className={css.ticker_heading}>
                            <h2 className={css.grid_heading}>Currency</h2>
                            <h2 className={css.grid_heading}>15m</h2>
                            <h2 className={css.grid_heading}>Last</h2>
                            <h2 className={css.grid_heading}>Buy</h2>
                            <h2 className={css.grid_heading}>Sell</h2>
                        </div>
                        {filteredCurrencies.map((currency: string) => {
                            return (
                                <div
                                    className={css.ticker_card__container}
                                    key={currency}
                                >
                                    <p data-cell>
                                        {(data as any)[currency]?.symbol === currency ?
                                            <>{currency}</>
                                            :
                                            <>{`${(data as any)[currency]?.symbol} | ${currency}`}</>
                                        }
                                    </p>
                                    <p data-cell>{(data as any)[currency]["15m"]}</p>
                                    <p data-cell>{(data as any)[currency]?.last}</p>
                                    <p data-cell>{(data as any)[currency]?.buy}</p>
                                    <p data-cell>{(data as any)[currency]?.sell}</p>
                                </div>
                            )
                        })}
                    </>
                    :
                    <p>Could not find currency {query}...</p>
                }
            </div>
        )
    }

}

export { Tickers }