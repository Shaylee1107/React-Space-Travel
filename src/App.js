import React from 'react';
import NavigationBar from "./routes/NavigationBar";
import AppRoute from "./routes/AppRoute";
import Motto from "./components/Motto";
import Loading from "./components/Loading";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoute />
      <Motto />
      {/* <Loading /> */}
    </BrowserRouter>
  );
}


export default App;
