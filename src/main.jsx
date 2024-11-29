import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Toaster, toast } from "sonner";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster />
    <App />
  </BrowserRouter>
);
