import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <div style={{ padding: "2px", margin: "10px" }}>
        <App />
      </div>
    </Provider>
  </StrictMode>
);
