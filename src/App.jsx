import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.component />}
                />
              )
            );
          })}
          <Route path="*" element={<Navigate to="/student-login" replace />} />
        </Routes>
        {/* <div>LoginPage</div> */}
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
