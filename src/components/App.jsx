import React from "react";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Root, Toolbar, Content } from "../styles";

const App = () => {
  return (
    <Root>
      <div>
        <CssBaseline />
        <Navbar />
        <Toolbar></Toolbar>
        <h1>Hello Filmpire</h1>
        <Content>
          <Outlet />
        </Content>
      </div>
    </Root>
  );
};

export default App;
