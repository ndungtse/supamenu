import useColorScheme from '@/hooks/useColorScheme'
import React from 'react'

const AppContext = React.createContext({
  colorScheme: 'light' as 'light' | 'dark',
  setColorScheme: (colorScheme: any) => { },
  toggleColorScheme: () => { }
})

export const useApp = () => React.useContext(AppContext)

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme()
  return (
    <AppContext.Provider value={{ colorScheme, setColorScheme, toggleColorScheme }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider