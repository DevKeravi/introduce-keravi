import React from "react";
import AppLayout from "./components/AppLayout/AppLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Reset } from "styled-reset";
import Router from "./router/router";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Reset />
        <AppLayout>
          <Router />
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
