import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import CustomLoader from "./components/Loader";
import { Suspense } from "react";
const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<CustomLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
