import { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};
function App() {
  const [players,setPlayers] = useState([]);
    const showPlayers = async ()=>{

        const response = await fetch('https://ultimate-tennis1.p.rapidapi.com/live_leaderboard/20',{headers: {
          'X-RapidAPI-Key': '0bdd2b86femsh2fba93fbf735348p1eb232jsn2daf6aaca7b7',
          'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
        }});
        const data  = await response.json();
        setPlayers(data.data);
        console.log(data.data);
     }

     useEffect(()=>{
         showPlayers();
     }, []);

     const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <BrowserRouter>
    <Navbar toggleTheme={toggleTheme}></Navbar>
      <Routes>
        <Route path='/' element={<Home players={players}/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
