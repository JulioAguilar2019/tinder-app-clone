import React, { createContext, useContext } from 'react'
import { SharedValue, useSharedValue } from 'react-native-reanimated'

type CardContextType = {
    activeIndex: SharedValue<number>
    incrementIndex: () => void
}

const CardContext = createContext<CardContextType | null>(null)

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const activeIndex = useSharedValue(0)

    const incrementIndex = () => {
        activeIndex.value = activeIndex.value + 1
    }

    return (
        <CardContext.Provider value={{ activeIndex, incrementIndex }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCardContext = () => {
    const context = useContext(CardContext)
    if (!context) {
        throw new Error('useCardContext must be used within a CardProvider')
    }
    return context
}
