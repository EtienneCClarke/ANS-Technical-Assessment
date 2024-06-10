import { useEffect } from "react";
import { useTickerData } from "../../hooks/blockchainApi";
import css from "./tickers.module.css";

const Tickers = () => {

    const { data, error, loading } = useTickerData();

    if(loading || error) {
        return (
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>
        )
    }

    if(data) {
        return (
            <div className={css.tickers__container}>
                {Object.keys(data).map(ticker => {
                    return (
                        <p>{data[ticker]?.symbol}</p>
                    )
                })}
            </div>
        )
    }

}

export { Tickers }