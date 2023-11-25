import { useState, useContext, createContext } from 'react';
import {
  type Props,
  type UserType,
  type UserContextType,
} from '../types/types';

// CREATE CONTEXT
const UserContext = createContext<UserContextType>({} as UserContextType);

// CUSTOM HOOKS
export const useUserContext = (): UserContextType => {
  const userContext = useContext(UserContext);
  if (userContext === undefined)
    throw new Error('useUserContext must be used within a UserProvider');
  return userContext;
};

// CONTEXT PROVIDER
export const UserProvider = (props: Props): JSX.Element => {
  // useState
  const [userData, setUserData] = useState<UserType>(null);

  // update states
  const updateUserData = (newUserData: UserType): void => {
    setUserData(newUserData);
  };

  return (
    <UserContext.Provider
      value={{ userData, updateUserData }}
      {...props}
    ></UserContext.Provider>
  );
};
