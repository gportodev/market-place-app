import { useState } from 'react';

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: 'Gabriel',
  });

  return {
    userData,
    setUserData,
  };
};
