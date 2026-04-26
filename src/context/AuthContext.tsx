import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  user: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children}: {children: React.ReactNode}){
    const [user, setUser] = useState<string | null>(
        localStorage.getItem("token")
    );

    const loginUser = (token: string) => {
        localStorage.setItem("token", token);
        setUser(token)
    }

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{user , login: loginUser, logout}}>
           {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)!;