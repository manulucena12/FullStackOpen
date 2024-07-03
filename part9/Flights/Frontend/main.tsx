import App from './src/App.js'
import ReactDOM  from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
