import React, { useState } from 'react';
import { createContext } from 'react';


export const DarkModeContext = createContext();

const DarkMode = ({children}) => {
    
    const [darkMode, setDarkMode] = useState(false);

    const darkInfo = {darkMode, setDarkMode}
    return (
        <DarkModeContext.Provider value={darkInfo}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkMode;