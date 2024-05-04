import React from "react";


const UserContext = React.createContext({
    user: null,
    setUser: () => {},
});

export const UserProvider = ({ children }) => {  
    const [user, setUser] = React.useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
 }

