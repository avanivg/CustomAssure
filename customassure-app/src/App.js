import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Profile from './pages/profile';
import Home from './pages/home';
import Nlp from './pages/Nlp'
import ProfilePage from './pages/profile_new';
 
function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/home' element={<Home />} />
		<Route path='/profile' element={<ProfilePage/>} />
		<Route path='/Nlp' element={<Nlp/>} />
	</Routes>
	</Router>
);
}

export default App;


