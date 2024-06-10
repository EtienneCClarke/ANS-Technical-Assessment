import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/tabs";

function App() {

  return (
	<section>
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
	</section>
  )
}

export default App
