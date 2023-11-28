import { useState, useContext, createContext, useEffect } from 'react';
import {
  type Props,
  type UserType,
  type UserContextType,
  type LoginContextType,
} from '../types/types';
import { type AuthChangeEvent } from '@supabase/supabase-js';
import { supabase } from '../supabase/supabase';

// CREATE CONTEXT
const UserContext = createContext<UserContextType | undefined>(undefined);

const LoginContext = createContext<LoginContextType | undefined>(undefined);

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
  const [auth, setAuth] = useState<AuthChangeEvent | null>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setAuth(event);
      session !== null ? updateLoginState(true) : updateLoginState(false);
    });
  }, [auth]);

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
