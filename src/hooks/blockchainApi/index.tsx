import { useEffect, useState } from "react";
import { BlockchainApiClient } from "../../lib/blockchainApiClient";

const useTickerData = () => {

    const client = new BlockchainApiClient();

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

export { useTickerData }