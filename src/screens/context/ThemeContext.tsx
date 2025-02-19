import React, { createContext, useContext } from 'react';

type ThemeContextType = {
    primaryColor: string;
    secondaryColor: string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode; primaryColor: string; secondaryColor: string }> = ({
    children,
    primaryColor,
    secondaryColor,
}) => {
    return (
        <ThemeContext.Provider value={{ primaryColor, secondaryColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
