import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import PageRoot from './PageRoot';
import IndexPage from './pages/IndexPage';
import ParentablePage from './pages/ParentablePage';
import StageDemoPage from './pages/StageDemoPage';
import { getExamplesRoutes } from './pages/examples';

function getRoutePath(basePath: string) {
  return (
    <Route path={basePath} component={PageRoot} >
      <IndexRoute component={IndexPage} />
      <Route path="parentable" component={ParentablePage} />
      <Route path="parentable/" component={ParentablePage} />
      <Route path="stage-demo" component={StageDemoPage} />
      <Route path="stage-demo/" component={StageDemoPage} />
      {getExamplesRoutes('examples')}
      {getExamplesRoutes('examples/')}
    </Route>
  );
}

export default (

  <Route path="/">
    {getRoutePath('reactive-konva')}
    {getRoutePath('/')}
  </Route>
);