import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (role) => {
        // Mock login logic
        const mockUsers = {
            student: { name: 'Rahul Sharma', role: 'student', hostel: 'H1', room: '101' },
            authority: { name: 'Mr. Verma', role: 'authority', designation: 'Chief Warden' },
            responder: { name: 'Team Alpha', role: 'responder', unit: 'Medical Unit 1' }
        };
        setUser(mockUsers[role]);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
