import { useEffect } from "react";
import { BlockchainApiClient } from "./lib/blockchainApiClient";

function App() {

  const client = new BlockchainApiClient();

  useEffect(() => {
    client.exchangeToBTC("USD", 20).then(res => {
      console.log(res);
    })
  }, [])

  return (
    <>
    </>
  )
}

export default App
