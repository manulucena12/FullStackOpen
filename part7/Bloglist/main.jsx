import ReactDom from "react-dom/client";
import { App } from "./src/App";

const root = ReactDom.createRoot(document.getElementById('app'))

root.render(<App/>)