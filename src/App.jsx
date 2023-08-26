import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';
import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Main darkMode={darkMode} />
    </>
  );
};

export default App;
