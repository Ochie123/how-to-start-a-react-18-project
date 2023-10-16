import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <App />

  </React.StrictMode>
);

//const el = document.getElementById('app');
//const root = createRoot(el);
//root.render(
//    <App />
//);