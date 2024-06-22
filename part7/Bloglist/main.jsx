import ReactDom from "react-dom/client";
import { App } from "./src/App";
import { Provider } from 'react-redux'
import { Store } from "./redux/store";

const root = ReactDom.createRoot(document.getElementById('app'))

root.render(<Provider store={Store} > <App/> </Provider>)