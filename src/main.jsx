import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './Store';
import App from './App.jsx'
//import AppContextProvider from './Context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      {/* <AppContextProvider value={{ cartState: [], cartDispatch: () => {}, filtersState: {}, filtersDistpatch: () => {} }}>
        <App />
      </AppContextProvider> */}
    </Provider>
  </StrictMode>
)
