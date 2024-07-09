import React from 'react';
import NavigationBar from "./routes/NavigationBar";
import AppRoute from "./routes/AppRoute";
import Motto from "./components/Motto";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <>
    <HashRouter>
      <NavigationBar />
      <AppRoute />
      <Motto />
      {/* <Loading /> */}
    </HashRouter>
    </>
  );
}


export default App;
