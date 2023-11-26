import { useState, useContext, createContext } from 'react';
import {
  type Props,
  type UserType,
  type UserContextType,
  type LoginContextType,
} from '../types/types';

// CREATE CONTEXT
const UserContext = createContext<UserContextType>({} as UserContextType);

const LoginContext = createContext<LoginContextType>({} as LoginContextType);

// CUSTOM HOOKS
export const useUserContext = (): UserContextType => {
  const userContext = useContext(UserContext);
  if (userContext === undefined)
    throw new Error('useUserContext must be used within a UserProvider');
  return userContext;
};

export const useLoginContext = (): LoginContextType => {
  const loginContext = useContext(LoginContext);
  if (loginContext === undefined)
    throw new Error('useLoginContext must be used within a UserProvider');
  return loginContext;
};

// CONTEXT PROVIDER
export const UserProvider = (props: Props): JSX.Element => {
  // useState
  const [userData, setUserData] = useState<UserType>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  // update states
  const updateUserData = (newUserData: UserType): void => {
    setUserData(newUserData);
  };

  const updateLoginState = (newLoginState: boolean): void => {
    setIsLogged(newLoginState);
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }} {...props}>
      <LoginContext.Provider
        value={{ isLogged, updateLoginState }}
        {...props}
      />
    </UserContext.Provider>
  );
};
