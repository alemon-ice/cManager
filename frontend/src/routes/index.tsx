import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Landing, Home } from 'components/pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/panel" component={Home} />
    </BrowserRouter>
  );
};

export default Routes;