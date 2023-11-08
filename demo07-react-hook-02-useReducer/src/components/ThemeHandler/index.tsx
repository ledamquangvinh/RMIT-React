import {createContext, useContext, useState} from 'react'

type Theme = 'light' | 'dark' | 'system';

const ThemeContext : React.Context<Theme> = createContext<Theme>("system");

const useGetTheme = () => useContext(ThemeContext)

const AlertBox = () => {
  const theme = useGetTheme();
  return(
    <div>
      <p>Current Theme: {theme}</p>
    </div>
  )
}

const ThemeHandler : React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light')

  const setDark = () => setTheme('dark')
  const setLight = () => setTheme('light')
  const setSystem = () => setTheme('system')
  return(
    <ThemeContext.Provider value={theme}>
      <AlertBox/>
      <button onClick={setLight}>set dark</button>
      <button onClick={setDark}>set dark</button>
      <button onClick={setSystem}>set dark</button>
    </ThemeContext.Provider>
  )
}

export default ThemeHandler