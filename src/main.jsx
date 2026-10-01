import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DownloadPage from "./pages/DownloadPage.jsx";
import Templates from "./pages/TemplatePage.jsx";
import TemplateContextProvider from "./context/TemplateContextProvider.jsx";
import { ClerkProvider } from "@clerk/react";
import { dark } from "@clerk/ui/themes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/download" element={<DownloadPage />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <ClerkProvider appearance={{ theme: dark }}>
    <TemplateContextProvider>
        <RouterProvider router={router} />
    </TemplateContextProvider>
  </ClerkProvider>,
);
