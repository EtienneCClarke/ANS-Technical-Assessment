import { useEffect, useState } from "react";
import { BlockchainApiClient } from "../../lib/blockchainApiClient";

const client = new BlockchainApiClient();

const useTickerData = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        try {
            setLoading(true);
            client.getTickers().then(json => {
                setData(json);
            })
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, [])

    return { loading, data, error };

}

const useExchangeToBTC = (currency: string, value: number) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        try {
            setLoading(true);
            client.exchangeToBTC(currency, value).then(json => {
                setData(json);
            })
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, [currency, value])

    return { loading, data, error };

}

export { useTickerData, useExchangeToBTC }