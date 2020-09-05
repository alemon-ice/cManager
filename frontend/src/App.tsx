import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from 'components/pages';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
