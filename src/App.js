import './App.css'
import NavbarTop from './Components/NavbarTop/NavbarTop'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Banner from './Components/Banner/Banner';
import SocialMedia from './Components/SocialMedia/SocialMedia';
import { useEffect } from 'react';
import './index.css'


function App() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="App">
      <div className="custom-cursor" />
      < NavbarTop />
      <SocialMedia />
    </div>
  );
}

export default App;
