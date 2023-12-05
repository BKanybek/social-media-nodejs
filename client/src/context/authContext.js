import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null
  ));
  console.log(currentUser, 'TEST1');

  const login = () => {
    setCurrentUser({
            id: 1,
            name: 'kanybek',
            profilePic : "https://i.pinimg.com/originals/b5/e6/39/b5e6396690d17ebb96576616b451febf.jpg",
        });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
