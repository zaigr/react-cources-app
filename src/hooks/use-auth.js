import { createContext, useContext, useState } from 'react';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    setUser({ email: email });

    return user;
  };

  const signout = () => {
    setUser(null);
  };

  return {
    user,
    signin,
    signout,
  };
}
