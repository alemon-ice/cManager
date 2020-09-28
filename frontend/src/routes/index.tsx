import React from 'react';
import { BrowserRouter, Route, useLocation } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import { Transition as CSSTransition } from 'styles/animation';
import { Landing, Home } from 'components/pages';

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={500}>
        <BrowserRouter>
          <Route path="/" exact component={Landing} />
          <Route path="/panel" component={Home} />
        </BrowserRouter>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;