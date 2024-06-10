import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/tabs";
import { CurrenciesProvider } from "./context/currencies";

function App() {

  return (
	<section className="view">
		<CurrenciesProvider>
			<Tabs defaultValue="tickers">
				<TabsList>
					<TabsTrigger value="tickers">Tickers</TabsTrigger>
					<TabsTrigger value="exchange">Exchange</TabsTrigger>
				</TabsList>
				<TabsContent value="tickers">
					<h1>Tickers</h1>
				</TabsContent>
				<TabsContent value="exchange">
					<h1>Exchange</h1>
				</TabsContent>
			</Tabs>
		</CurrenciesProvider>
	</section>
  )
}

export default App
