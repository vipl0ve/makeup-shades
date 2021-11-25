import './App.css'
import shades from './data/shades.json'
import product from './components/product'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				{shades.map((item) => (
					<product item={item} />
				))}
			</header>
		</div>
	)
}

export default App
