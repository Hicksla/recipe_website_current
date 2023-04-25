import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <StrictMode>
    <script
      async
      src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></script>
    <App />
  </StrictMode>
);
