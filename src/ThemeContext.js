import CreateContext from 'react';

export const ThemeContext = createContext(null);
const themeContext = <ThemeContext.Provider  value={{ state, dispatch }}>
<Button>Change Theme</Button>
</ThemeContext.Provider>;

const { state, dispatch } = useContext(themeContext);

function ThemeContext(){}
