import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import UserDetails from './Pages/UserDetails';
import Navbar from './Components/Navbar';
import { HeadProvider } from './Components/Context';
import { useEffect } from 'react';

export default function App() {
  const [currentTheme, setcurrentTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');
   useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme');
      setcurrentTheme(newTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    
      

    return () => observer.disconnect();
  }, []);
 
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <HeadProvider>
    <Router>
      <div className={currentTheme==='light' ? "min-h-screen bg-gradient-to-tl from-red-100 via-blue-300 to-blue-500" : "min-h-screen bg-gradient-to-tl from-red-50 via-grey-200 to-grey-300" }>
        <Navbar selectedUser={selectedUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
    </HeadProvider>
  );
}
