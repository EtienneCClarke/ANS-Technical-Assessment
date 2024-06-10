class BlockchainApiClient {

    private ticker_url: string;
    private exchange_url: string;

    constructor() {
        this.exchange_url = import.meta.env.VITE_BLOCKCHAIN_API_EXCHANGE_URL;
        this.ticker_url = import.meta.env.VITE_BLOCKCHAIN_API_TICKER_URL;
    }

    public async getTickers() {
        return fetch(
            this.ticker_url
        ).then(res => {
            if(res.status === 200) {
                return res.json();
            }
            throw new Error("Could not fetch ticker data");
        })
    }

    public async exchangeToBTC(currency: string, value: number) {
        return fetch(
            this.exchange_url + `?currency=${currency}&value=${value}`
        ).then(res => {
            if(res.status === 200) {
                return res.json();
            }
            throw new Error("Could not fetch exchange data");
        })
    }

}

export { BlockchainApiClient }