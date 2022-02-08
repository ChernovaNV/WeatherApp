import React, { useState } from 'react';
import { COORDINATES } from './constants/objects';
import { AuthContext } from './context';


const GlobalStates = ({children}) => {
  const [openModal, setOpenModal] = useState(false);
  const [temp, setTemp] = useState('C');
  const [currentSity, setCurrentSity] = useState({});
  const [currentNameSity, setCurrentNameSity] = useState(Object.keys(COORDINATES)[0]);
  const [isLoadingWeather, setIsLoadingWeather] = useState(true);

  return (
    <AuthContext.Provider value={{
      openModal, setOpenModal,
      currentNameSity,  setCurrentNameSity,
      temp,  setTemp,
      currentSity,  setCurrentSity,
      isLoadingWeather, setIsLoadingWeather,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default GlobalStates;