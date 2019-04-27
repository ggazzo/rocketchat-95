import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
	reset,
	themes,
	AppBar,
	Toolbar,
	TextField,
	Menu
} from 'react95';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default props =>
  <div className="App">
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        	<TextField placeholder="Search..." width={150} style={{ marginLeft: 4 }}/>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  </div>
