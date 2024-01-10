import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
const About = lazy(() => import('./About'))
const Home = lazy(() => import('./Home'))

const App: React.FC = () => (
	<>
		{/* <header className='App-header'>
			<img src={logo} className='App-logo' alt='logo' />
		</header> */}
		<Router>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/about' element={<About />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</Suspense>
		</Router>
	</>
)

export default App
