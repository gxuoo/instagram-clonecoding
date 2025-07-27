import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

async function enableMockingAndRenderApp() {
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./mocks/worker.js");
    await worker.start({
      onUnhandledRequest: "bypass",
    });
  }

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

enableMockingAndRenderApp();
