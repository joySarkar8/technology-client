import React, { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkMode/DarkMode';

const QuistionAndAnswer = ({data}) => {
    const { question, answer } = data;
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? "text-white opacity-75" : "light-mode"}>
            <h1 className='mb-4'>{question}</h1>
            <p className=''>{answer}</p>
            <hr className='mb-5' />
        </div>
    );
};

export default QuistionAndAnswer;