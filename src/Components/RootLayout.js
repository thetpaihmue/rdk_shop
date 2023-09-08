import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../Store/store";
import Navi from "./Navi";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navi />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
