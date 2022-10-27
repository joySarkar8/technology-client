import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { DarkModeContext } from './contexts/DarkMode/DarkMode';
import { routes } from './Routes/Routes/Routes';

function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
